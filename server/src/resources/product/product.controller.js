const { ProductModel, Topic } = require("./product.model");

async function addProduct(req, res, next) {
    const product = await new ProductModel(req.body)
    console.log(product);

    product.save();
    res.status(201).json(product)
}

async function getProducts(req, res) {
    const products = await ProductModel.find({deleted: false});
    res.status(200).json(products);
  }

async function getSingleProduct(req, res) {
    const product = await ProductModel.findOne({
      id: req.params.id
    });
    res.status(200).json(product);
  }

module.exports = { addProduct, getProducts, getSingleProduct };