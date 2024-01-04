const express = require("express");
const { UserCreateValidationSchema, UserUpdateValidationSchema } = require("./user.model");
// const { Router } = require("express")

const {
    addUser,
    getUsers, 
    getSingleUser,
    loginUser, 
    logout, 
    updateUser,
    authorize
} = require("./user.controller");
// const { UserCreateValidationSchema } = require("./user.model");
const { validate } = require("../middlewares");

const userRouter = express
.Router()
.get("/users", getUsers)
.get("/users/:id", getSingleUser)
.get("/users/authorize", authorize)
.post("/users", validate(UserCreateValidationSchema), addUser)
.post("/users/login", loginUser)
.post("/users/logout", logout)
.put("/users/update/:id", validate(UserUpdateValidationSchema), updateUser)


module.exports = { userRouter }