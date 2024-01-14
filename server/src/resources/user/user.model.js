const { Schema, model, models } = require("mongoose");
const Joi = require("joi");

const UserSchema = new Schema({
    firstName:{ type: String, required: false },
    lastName: { type: String, required: false },
    email: { type: String, required: true },
    street: { type: String, required: false }, 
    postCode: { type: String, required: false },
    city: { type: String, required: false }, 
    password: { type: String, required: true }, 
    isAdmin: { type: Boolean, required: true, default: false }
});

const UserModel = model("User", UserSchema);

const UserCreateValidationSchema = Joi.object({
    firstName: Joi.string().strict().allow('').optional(),
    lastName: Joi.string().strict().allow('').optional(),
    street: Joi.string().allow('').optional(), 
    postCode: Joi.number().strict().allow('').optional(),
    city: Joi.string().strict().allow('').optional(),
    email: Joi.string().min(4).email().strict().required(),
    password: Joi.string().strict().required(),
    isAdmin: Joi.boolean().strict(),
  });
  
const UserUpdateValidationSchema = Joi.object({
    firstName: Joi.string().strict().pattern(new RegExp('^[A-Za-zåäöÅÄÖ]+$')).allow('').optional(),
    lastName: Joi.string().strict().pattern(new RegExp('^[A-Za-zåäöÅÄÖ]+$')).allow('').optional(),
    street: Joi.string().pattern(new RegExp('^[A-Za-z0-9\\såäöÅÄÖ]+$')).allow('').optional(), 
    postCode: Joi.number().strict().integer().allow('').optional(),
    city: Joi.string().strict().pattern(new RegExp('^[A-Za-z]+$')).allow('').optional(),
  });

module.exports = { 
    UserModel, 
    UserCreateValidationSchema,
    UserUpdateValidationSchema
};