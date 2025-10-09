import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

const storeCookies = (res, payload) => {
    console.log("i am in cookies");

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1d" })
    console.log("token", token);

    res.cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 24 * 60 * 60 * 1000
    })
}

export default storeCookies