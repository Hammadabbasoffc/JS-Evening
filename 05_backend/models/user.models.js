import mongoose from "mongoose";
const userschema = new mongoose.Schema({
    name: {
        type: string,
        required: true,
        trim: true
    },
    email: {
        type: string,
        required: true,
        unique: true
    },
    password: {
        type: string,
        required: true,

    },
    Role: {
        type: string,
        enum: ['user', 'admin'],
        default: 'user'
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    verificationToken: {
        type: String,
        default: undefined
    },
    passwordResetToken: {
        type: String,
        default: undefined
    },
    passwordResetExpires: {
        type: Date
    }

},
    {
        timestamps: true
    }
)

const User = mongoose.model('User', userschema)
export default User 