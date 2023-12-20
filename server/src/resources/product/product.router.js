const { Router } = require("express")

const {
    getProducts, 
    getSingleProduct,
    addProduct
} = require("./product.controller");

const productRouter = Router()
.get("/products", getProducts)
.get("/products/:id", getSingleProduct)
.post("/products", addProduct)

module.exports = { productRouter }