import router from 'express'
import { registerUser } from '../controllers/user.controller.js'

const userRouter = router()

userRouter.post('/register-user', registerUser)

export default userRouter