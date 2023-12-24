const express = require("express");
// const { Router } = require("express")

const {
    addUser,
    getUsers, 
    getSingleUser,
    loginUser, 
    logout, 
    // authorize
} = require("./user.controller");
// const { UserCreateValidationSchema } = require("./user.model");
// const { validate } = require("../middlewares");

const userRouter = express
.Router()
.get("/users", getUsers)
.get("/users/:id", getSingleUser)
.post("/users", addUser)
.post("/users/login", loginUser)
.post("/users/logout", logout)
// .get("/users/authorize", authorize);


module.exports = { userRouter }