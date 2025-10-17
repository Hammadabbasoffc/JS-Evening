import router from "express"
import { getMe, login, logout, registerUser } from "../controllers/user.controller.js"
import { isLoggedIn } from "../middlewares/isLoggedIn.js"

const userRouter = router()

userRouter.post('/register', registerUser)
userRouter.post('/login', login)
userRouter.post("/logout", isLoggedIn, logout)
userRouter.get("/me", isLoggedIn, getMe)

export default userRouter


