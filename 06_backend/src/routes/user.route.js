import router from "express"
import { login, logout, registerUser } from "../controllers/user.controller.js"
import { isLoggedin } from "../middlewares/isLoggedin.js"

const userRouter = router()

userRouter.post("/register", registerUser)
userRouter.post("/login", login)
userRouter.post("/logout", isLoggedin, logout)

export default userRouter