const { Schema, model, models } = require("mongoose");

const ProductSchema = new Schema({
    id: {type: Number, required: true },
    title: String,
    description: String,
    usage: String, 
    suits: String, 
    ingredients: String, 
    nutritions: String, 
    price: Number,
    image: String,
    instock: Number
});


const ProductModel = model("Product", ProductSchema);


module.exports = { 
    ProductModel
};