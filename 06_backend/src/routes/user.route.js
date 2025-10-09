import router from "express"
import { login, registerUser } from "../controllers/user.controller.js"

const userRouter = router()

userRouter.post("/register", registerUser)
userRouter.post("/login", login)

export default userRouter