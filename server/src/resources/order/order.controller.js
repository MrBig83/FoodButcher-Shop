const { OrderModel } = require("./order.model");
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
    console.log("Order");
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
    console.log("Hitta");
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
    console.log("Nu sparar vi till MongoDB");
    console.log(req.body);
    const order = new OrderModel({
        ...req.body,
        // customer: req.session._id,
        // orderNumber: Math.floor(Math.random() * 1000000),
      });
  
      await order.save();
      res.status(201).json(order);
}
// ================== GET USER ORDERS ==================
async function getUserOrders(req, res) {
    console.log("UserOrders");
   
    const orders = await OrderModel.find({
        description: req.params.id
    });
    res.status(200).json(orders);
    //     res.status(200).json(products);
    //     console.log(products);
    //   }

    // const product = await ProductModel.findOne({
    //     id: req.params.id
    //   });

    // try {
    //     const response = await fetch(`https://test-api.payson.se/2.0/Checkouts/${req.params.id}`, requestOptions)
    //     const result = await response.json()
    //     res.status(200).json(result)
    // } catch(error) {
    //     console.log('error', error);
    //     res.status(500).json({ success: false, error: error.message })
    // }
}





// ================== EXPORTS ==================
module.exports = { getMerchant, postOrder, getOrder, updateOrder, getPaidOrders, saveToMongo, getUserOrders };
