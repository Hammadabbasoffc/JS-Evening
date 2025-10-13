import jwt from "jsonwebtoken"
export const isLoggedin = async (req, res, next) => {
    const token = req.cookies.token
    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Unauthorized"
        })
    }

    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decode
        next()
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Unauthorized , please login"
        })
    }
}