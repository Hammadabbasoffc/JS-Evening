import Product from "../models/Product.model"


const createProduct = async (req, res) => {
    const { name, description, quantity, stock, price, category } = req.body

    const { _id } = req.user

    const product = await Product.create({
        name, description, quantity, stock, price, category, userId: _id
    })

}