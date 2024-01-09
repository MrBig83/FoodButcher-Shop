const { Router } = require("express")

const {
    getProducts, 
    getSingleProduct,
    addProduct, 
    adminGetProducts,
    updateProduct
} = require("./product.controller");

const { adminOnly, auth, exists, validate } = require('../middlewares');
const { ProductCreateValidationSchema } = require('./product.model')

const productRouter = Router()
.get("/products", getProducts)
.get("/products/admin", auth, adminOnly, adminGetProducts)
.get("/products/:id", getSingleProduct)
.post("/products", auth, adminOnly, validate(ProductCreateValidationSchema), addProduct)
.put("/products/:id", updateProduct)

module.exports = { productRouter }