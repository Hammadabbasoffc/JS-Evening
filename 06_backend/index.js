import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import connectDB from './src/utils/connectDB.js'
import userRouter from './src/routes/user.route.js'

dotenv.config()
const port = process.env.PORT || 3000

const app = express()

connectDB()

app.use(express.json())
app.use(cookieParser())


app.use("/api/v1/users", userRouter)

app.listen(port, () => {
    console.log(`server is running at ${port}`);
})

