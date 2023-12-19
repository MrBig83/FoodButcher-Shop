const { ProductModel, Topic } = require("./product.model");
const { connectMongoDB } = require("../../libs/mongodb")

async function addProduct(req, res, next) {
    await connectMongoDB()
    const product = await new ProductModel(req.body)

    product.save();
    res.status(201).json(product)
}

async function getAllProducts(req, res) {
    // const products = await ProductModel.find();
    await connectMongoDB()
    const products = await ProductModel.find();
    // const products = await ProductModel.find();
    res.status(200).json(products);
  }

module.exports = { addProduct, getAllProducts };