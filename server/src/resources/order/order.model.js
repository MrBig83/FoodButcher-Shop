const { Schema, model, models } = require("mongoose");
// const Joi = require("joi");

const AddressSchema = new Schema(
    {
      street: { type: String, required: true },
      zipcode: { type: String, required: true },
      city: { type: String, required: true },
      country: { type: String, required: true },
    },
    { _id: false }
  );
  
  const OrderItemSchema = new Schema(
    {
      product: { type: Schema.Types.ObjectId, ref: "product", required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, default: 0 },
    },
    { _id: false }
  );
  
  const OrderSchema = new Schema(
    {
      customer: { type: Schema.Types.ObjectId, ref: "user", required: true },
      orderItems: { type: [OrderItemSchema], required: true },
      deliveryAddress: { type: AddressSchema, required: true },
      shipped: { type: Boolean, required: false, default: false },
    },
    {
      timestamps: true,
    }
  );

const OrderModel = model("Order", OrderSchema);

// const UserCreateValidationSchema = Joi.object({
//     firstName: Joi.string().strict().allow('').optional(),
//     lastName: Joi.string().strict().allow('').optional(),
//     street: Joi.string().allow('').optional(), 
//     postCode: Joi.number().strict().allow('').optional(),
//     city: Joi.string().strict().allow('').optional(),
//     email: Joi.string().min(4).email().strict().required(),
//     password: Joi.string().strict().required(),
//     isAdmin: Joi.boolean().strict(),
//   });
  
// const UserUpdateValidationSchema = Joi.object({
//     firstName: Joi.string().strict().pattern(new RegExp('^[A-Za-zåäöÅÄÖ]+$')).allow('').optional(),
//     lastName: Joi.string().strict().pattern(new RegExp('^[A-Za-zåäöÅÄÖ]+$')).allow('').optional(),
//     street: Joi.string().pattern(new RegExp('^[A-Za-z0-9\\såäöÅÄÖ]+$')).allow('').optional(), 
//     postCode: Joi.number().strict().integer().allow('').optional(),
//     city: Joi.string().strict().pattern(new RegExp('^[A-Za-z]+$')).allow('').optional(),
//   });

module.exports = { 
    OrderModel, 
    // UserCreateValidationSchema,
    // UserUpdateValidationSchema
};