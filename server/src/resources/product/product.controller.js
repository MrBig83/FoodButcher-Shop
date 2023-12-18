const { ProductModel } = require("./product.model");

async function registerProduct(req, res, next) {
    const product = await new ProductModel(req.body)

    product.save();
    res.status(201).json(product)
}

async function getAllProducts(req, res) {
    // const products = await ProductModel.find();
    const products = await ProductModel.find();
    res.status(200).json(products);
  }

module.exports = { registerProduct, getAllProducts };