import bcrypt from "bcrypt"
import User from "../models/user.model.js"
import storeCookies from "../utils/storeCookies.js"
const registerUser = async (req, res) => {
    console.log(req);

    const { name, email, password, role } = req.body


    if (!name || !email || !password) {
        return res.status(400).json({
            success: false,
            message: "Credentials are required"
        })

    }
    try {
        const existinguser = await User.findOne({ email })
        if (existinguser) {
            return res.status(400).json({
                success: false,
                message: "user already exist"
            })
        }
        const user = await User.create({
            name, email, password, role
        })
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "user do not created"
            })
        }
        return res.status(201).json({
            success: true,
            message: "user Createde Successfully",
            user
        })




    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const login = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(400).json({
            sucess: false,
            message: "email and password are required"
        })
    }

    try {
        const user = await User.findOne({
            email
        })



        if (!user) {
            return res.status(400).json({
                success: false,
                message: "User not found"
            })
        }



        const isMatched = bcrypt.compare(password, user.password)

        if (!isMatched) {
            return res.status(400).json({
                success: false,
                message: "User not LoggedIn"
            })
        }

        console.log("I am here  ........");


        const payload = {
            userId: user._id,
            role: user.role
        }

        storeCookies(res, payload)

        return res.status(200).json({
            success: true,
            message: "User LoggedIn Successfully"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }



}

export { login, registerUser }
