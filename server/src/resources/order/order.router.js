const express = require("express");
const { Router } = require("express")

const {
    getMerchant, 
    getOrder,
    getPaidOrders,
    postOrder, 
    updateMongoOrder, 
    getUserOrders, 
    saveToMongo, 
    getAdminOrders

} = require("./order.controller");

const { adminOnly, auth } = require('../middlewares');

const orderRouter = express
.Router()
.post("/orders/", postOrder)
.post("/orders/mongo", saveToMongo)
.get("/orders/merchant", getMerchant)
.get("/orders/paid", getPaidOrders)
.get("/orders/:id", getOrder)
.get("/orders/user/:id", getUserOrders)
.get("/orders/", auth, adminOnly, getAdminOrders)
.put("/orders/:id", updateMongoOrder)

module.exports = { orderRouter }