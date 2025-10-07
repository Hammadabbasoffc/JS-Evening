import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

const connectDB = () => {
    mongoose.connect(process.env.DATABASE_URI)
        .then(() => {
            console.log("Datbase Connect Successfully");
        })
        .catch((error) => {
            console.log("Database Error", error);
        })
}

export default connectDB