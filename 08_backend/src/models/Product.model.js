import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        rquired: true
    },
    description: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        default: 0,
    },
    stock: {
        type: Number,
        default: 0,
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        enum: ["Shoes", "clothes"]
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }

})

const Product = mongoose.model("Product", productSchema)
export default Product