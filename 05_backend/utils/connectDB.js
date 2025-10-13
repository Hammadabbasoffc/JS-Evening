import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config();
const connectDB = async () => {
    try {
        mongoose.connect(process.env.DATABASE_URL).then(() => {
            console.log('mongodb connected successfuly0');

        }).catch((err) => {
            console.log('not connected', err);

        })

    } catch (error) {
        console.log('error', error);

    }
}
export default connectDB;