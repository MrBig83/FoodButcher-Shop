const express = require("express");
const { UserCreateValidationSchema, UserUpdateValidationSchema } = require("./user.model");

const {
    addUser,
    getUsers, 
    getSingleUser,
    loginUser, 
    logout, 
    updateUser,
    authorize
} = require("./user.controller");

const { validate } = require("../middlewares");
const userRouter = express
.Router()
.get("/users", getUsers)
.get("/users/authorize", authorize)
.get("/users/:id", getSingleUser)
.post("/users", validate(UserCreateValidationSchema), addUser)
.post("/users/login", loginUser)
.post("/users/logout", logout)
.put("/users/update/:id", validate(UserUpdateValidationSchema), updateUser)


module.exports = { userRouter }