const { Schema, model, models } = require("mongoose");

const UserSchema = new Schema({
    id: {type: String, required: true },
    firstName: String,
    lastName: String,
    email: String, 
    street: String, 
    postCode: String, 
    city: String, 
    userName: String,
    password: String
    // Tidigare ordrar?
});


const UserModel = model("User", UserSchema);


module.exports = { 
    UserModel
};