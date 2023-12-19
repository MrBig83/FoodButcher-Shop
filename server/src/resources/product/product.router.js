const { Router } = require("express")

const {
    getProducts, 
    addProduct
} = require("./product.controller");

const productRouter = Router()
.get("/products", getProducts)
.post("/products", addProduct)

module.exports = { productRouter }