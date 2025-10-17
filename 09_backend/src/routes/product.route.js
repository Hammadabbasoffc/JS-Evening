import router from "express"
import { isLoggedIn } from "../middlewares/isLoggedIn.js";
import { upload } from "../middlewares/multer.js";
import { createProduct } from "../controllers/product.controller.js";

const productRouter = router()

productRouter.post(
    "/create", isLoggedIn, upload.single("image"), createProduct);

export default productRouter