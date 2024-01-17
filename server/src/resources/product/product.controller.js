const { ProductModel, Topic } = require("./product.model");

async function addProduct(req, res, next) {
    const product = await new ProductModel(req.body)
    product.save();
    res.status(201).json(product)
}

async function getProducts(req, res) {
    const products = await ProductModel.find({deleted: false});
    res.status(200).json(products);
  }
  
async function adminGetProducts(req, res) {
    const products = await ProductModel.find();
    res.status(200).json(products);
  }

async function getSingleProduct(req, res) {
    const product = await ProductModel.findOne({
      id: req.params.id
    });
    res.status(200).json(product);
  }

async function updateProduct(req, res) {
  const product = await ProductModel.findByIdAndUpdate(
    req.params.id, 
    req.body, 
    {new: true },
  );
  res.status(200).json(product);
}
async function deleteProduct(req, res) {
  const product = await ProductModel.findByIdAndDelete(
    req.params.id
  );
  res.status(204).json(product)
  res.status(200).json("Produkt med ID: " + req.params.id + " är nu raderad");
}

module.exports = { addProduct, getProducts, adminGetProducts, getSingleProduct, updateProduct, deleteProduct };