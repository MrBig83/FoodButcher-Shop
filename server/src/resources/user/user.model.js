const { Schema, model, models } = require("mongoose");

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String, 
    street: String, 
    postCode: String, 
    city: String, 
    userName: String,
    password: String, 
    isAdmin: Boolean
        
        // Tidigare ordrar??
        // _id: String,
        // firstName:{ type: String, required: false },
        // lastName: { type: String, required: false },
        // email: { type: String, required: true },
        // street: { type: String, required: false }, 
        // postCode: { type: String, required: false },
        // city: { type: String, required: false }, 
        // userName: { type: String, required: false },
        // password: { type: String, required: true }, 
        // isAdmin: { type: Boolean, required: true, default: false }
        // Tidigare ordrar??
});

const UserModel = model("User", UserSchema);


module.exports = { 
    UserModel
};