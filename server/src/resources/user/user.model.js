const { Schema, model, models } = require("mongoose");

const UserSchema = new Schema({
    // _id: String,
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
});


const UserModel = model("User", UserSchema);


module.exports = { 
    UserModel
};