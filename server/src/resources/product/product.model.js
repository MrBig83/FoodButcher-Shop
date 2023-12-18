const { Schema, model, models } = require("mongoose");

const ProductSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    image: String,
    instock: Number
});

const ProductModel = models.product || model("Product", ProductSchema);

module.exports = { 
    ProductModel 
};