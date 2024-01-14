const express = require("express");
// const { UserCreateValidationSchema, UserUpdateValidationSchema } = require("./user.model");
const { Router } = require("express")

const {
    
    // getUsers, 
    getMerchant, 
    getOrder,
    getPaidOrders,
    postOrder, 
    updateOrder, 
    getUserOrders, 
    saveToMongo

} = require("./order.controller");
// const { UserCreateValidationSchema } = require("./user.model");
// const { validate } = require("../middlewares");

const orderRouter = express
.Router()
.get("/orders/merchant", getMerchant)
.post("/orders/", postOrder)
.post("/orders/mongo", saveToMongo)
.get("/orders/paid", getPaidOrders)
.get("/orders/:id", getOrder)
.get("/orders/user/:id", getUserOrders)
.put("/orders/:id", updateOrder)



module.exports = { orderRouter }