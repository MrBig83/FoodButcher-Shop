const { OrderModel } = require("./order.model");
const { ProductModel } = require("../product/product.model");
// const bcrypt = require("bcrypt");

// const {
//     getTest
// } = require("./payson.controller");

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", "Basic MTMyNTk6OWU2ODZiNmQtOTcyYS00NjYzLTlmZjYtM2MyNWZiOTNiZGQw");

// ================== GET MERCHANT ==================
async function getMerchant(req, res) {
    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    try {
        const response = await fetch("https://test-api.payson.se/2.0/Accounts", requestOptions)
        const result = await response.json()  
        res.status(200).json(result)
    } catch(error) {
        console.log('error', error)
        res.status(500).json({ success: false, error: error.message });
    }
  }

  // ================== POST ORDER ==================
async function postOrder(req, res) {    
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(req.body),
        redirect: 'follow'
    };
    try {
        const response = await fetch("https://test-api.payson.se/2.0/Checkouts", requestOptions)
        const result = await response.json()
        res.status(201).json(result)
        } catch(error) {
            console.log('error', error);
            res.status(500).json({ success: false, error: error.message })
        }
}

// ================== GET ORDER ==================
async function getOrder(req, res) {
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    try {
        const response = await fetch(`https://test-api.payson.se/2.0/Checkouts/${req.params.id}`, requestOptions)
        const result = await response.json()
        res.status(200).json(result)
    } catch(error) {
        console.log('error', error);
        res.status(500).json({ success: false, error: error.message })
    }
}
// ================== GET PAID ORDERs ==================
async function getPaidOrders(req, res) {
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    try {
        const response = await fetch(`https://test-api.payson.se/2.0/Checkouts?status=PaidToAccount`, requestOptions)
        const result = await response.json()
        res.status(200).json(result)
    } catch(error) {
        console.log('error', error);
        res.status(500).json({ success: false, error: error.message })
    }
}
// ================== UPDATE ORDER ==================
async function updateOrder(req, res) {
    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: JSON.stringify(req.body),
      redirect: 'follow'
    };
    try {
        const response = await fetch(`https://test-api.payson.se/2.0/Checkouts/${req.params.id}`, requestOptions)
        const result = await response.json()
        res.status(201).json(result)
    } catch(error) {
        console.log('error', error);
        res.status(500).json({ success: false, error: error.message })
    }
}

// ================== SAVE ORDER to MongoDB ==================
async function saveToMongo(req, res) {
    try {
        for (const orderItem of req.body.order.items) {
            let product = await ProductModel.findById(orderItem.reference);
            if (product) {
            product.instock -= orderItem.quantity;
            await product.save();
            }
        }
        const order = new OrderModel({
          ...req.body,
        });
    
        await order.save();
        res.status(201).json(order);
    } catch (err) {
    console.log(err);
    }
    
}
// ================== GET USER ORDERS ==================
async function getUserOrders(req, res) {   
    const orders = await OrderModel.find({
        description: req.params.id
    });
    res.status(200).json(orders);
}





// ================== EXPORTS ==================
module.exports = { getMerchant, postOrder, getOrder, updateOrder, getPaidOrders, saveToMongo, getUserOrders };
