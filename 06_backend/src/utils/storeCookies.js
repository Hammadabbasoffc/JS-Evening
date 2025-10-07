import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

const storeCookies = (res, payload) => {
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1d" })
    res.cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 24 * 60 * 60 * 1000
    })
}

export default storeCookies