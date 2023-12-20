const { ProductModel, Topic } = require("./product.model");
const { connectMongoDB } = require("../../libs/mongodb")

async function addProduct(req, res, next) {
    await connectMongoDB()
    const product = await new ProductModel(req.body)

    product.save();
    res.status(201).json(product)
}

async function getProducts(req, res) {
    const products = await ProductModel.find();
    res.status(200).json(products);
  }

async function getSingleProduct(req, res) {
    const product = await ProductModel.findOne({
      id: req.params.id
    });
    res.status(200).json(product);
  }

module.exports = { addProduct, getProducts, getSingleProduct };