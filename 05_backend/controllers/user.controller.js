import User from "../models/user.models";
import crypto from "crypto"
import nodemailer from "nodemailer";


const registerUser = async (req, res) => {
    const { name, email, password, role } = req.body
    if (!name || !email || !password) {
        return res.status(400).json({
            success: false,
            message: 'Please provide all the details'
        })
    }

    try {

        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: 'User already exists'
            })
        }

        const user = await User.create({
            name, email, password, role
        })

        const token = crypto.randomBytes(32).toString('hex');
        user.verificationToken = token;
        await user.save();


        const transporter = nodemailer.createTransport({
            host: process.env.MAIL_TRAP_HOST,
            port: process.env.MAIL_TRAP_PORT,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.MAIL_TRAP_USER,
                pass: process.env.MAIL_TRAP_PASS,
            },
        });

        const mailOptions = {
            from: process.env.MAILTRAP_SENDER_EMAIL,
            to: user.email,
            subject: "Verify your email",
            text: `Please click on the following link to verify your email: ${process.env.BASE_URL}/api/v1/users/verify/${token}`,
        };

        await transporter.sendMail(mailOptions);


        return res.status(201).json({
            success: true,
            message: 'User registered successfully please verify Your Email',
            user
        })


    } catch (error) {
        return res.status(400).json({
            success: false,
            message: 'Internal server error'
        })
    }

}