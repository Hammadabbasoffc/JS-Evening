import User from "../models/User.model.js"

const registerUser = async (req, res) => {
    const { name, email, password, role } = req.body

    if (!name || !email || !password) {
        return res.status(400).json({
            success: false,
            message: 'Name, email and password are required'
        })
    }

    const user = await User.create({ name, email, password, role })
    if (!user) {
        return res.status(500).json({
            success: false,
            message: 'User registration failed'
        })
    }

    res.status(201).json({
        success: true,
        message: 'User registered successfully',
        user
    })

}

export { registerUser }