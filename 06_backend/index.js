import express from 'express'
import dotenv from 'dotenv'
import connectDB from './src/utils/connectDB'
import cookieParser from 'cookie-parser'

dotenv.config()
const port = process.env.PORT || 3000

const app = express()

connectDB()

app.use(express.json())
app.use(cookieParser())


app.listen(port, () => {
    console.log(`server is running at ${port}`);
})

