const { Schema, model, models } = require("mongoose");
const Joi = require("joi");

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
    instock: Number, 
    deleted: Boolean
});


const ProductModel = model("Product", ProductSchema);

const ProductCreateValidationSchema = Joi.object({
    id: Joi.number().strict().required(),
    title: Joi.string().strict().pattern(new RegExp('^[A-Za-z0-9, .!?:åäöÅÄÖ()]+$')).required(),
    description: Joi.string().strict().pattern(new RegExp('^[A-Za-z0-9, .!?:åäöÅÄÖ()]+$')).required(),
    usage: Joi.string().strict().pattern(new RegExp('^[A-Za-z0-9, .!?:åäöÅÄÖ()]+$')).required(),
    suits: Joi.string().strict().pattern(new RegExp('^[A-Za-z0-9, .!?:åäöÅÄÖ()]+$')).required(),
    ingredients: Joi.string().strict().pattern(new RegExp('^[A-Za-z0-9, .!?:åäöÅÄÖ()]+$')).required(),
    nutritions: Joi.string().strict().pattern(new RegExp('^[A-Za-z0-9, .!?:åäöÅÄÖ()]+$')).required(),
    price: Joi.number().min(50).max(1000).strict().integer().required(),
    image: Joi.string().uri({ scheme: ['http', 'https'] }).required(),
    instock: Joi.number().min(0).strict().integer().required(),
    deleted: Joi.boolean().required()
  });

module.exports = { 
    ProductModel, 
    ProductCreateValidationSchema
};