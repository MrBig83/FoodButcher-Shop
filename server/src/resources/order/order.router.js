const express = require("express");
// const { UserCreateValidationSchema, UserUpdateValidationSchema } = require("./user.model");
const { Router } = require("express")

const {
    
    // getUsers, 
    getMerchant, 
    getOrder,
    getPaidOrders,
    postOrder, 
    updateMongoOrder, 
    getUserOrders, 
    saveToMongo, 
    getAdminOrders

} = require("./order.controller");
// const { UserCreateValidationSchema } = require("./user.model");
const { adminOnly, auth } = require('../middlewares');

const orderRouter = express
.Router()
.post("/orders/", postOrder)
.post("/orders/mongo", saveToMongo)
.get("/orders/merchant", getMerchant)
.get("/orders/paid", getPaidOrders)
.get("/orders/:id", getOrder)
.get("/orders/user/:id", getUserOrders)
// .get("/orders/", auth, adminOnly, getAdminOrders)
.get("/orders/", getAdminOrders)
.put("/orders/:id", updateMongoOrder)



module.exports = { orderRouter }