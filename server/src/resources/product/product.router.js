const { Router } = require("express")

const {
    getProducts, 
    getSingleProduct,
    addProduct
} = require("./product.controller");

const { adminOnly, auth, exists, validate } = require('../middlewares');
const { ProductCreateValidationSchema } = require('./product.model')

const productRouter = Router()
.get("/products", getProducts)
.get("/products/:id", getSingleProduct)
.post("/products", auth, adminOnly, validate(ProductCreateValidationSchema), addProduct)

module.exports = { productRouter }