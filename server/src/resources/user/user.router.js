const { Router } = require("express")

const {
    addUser,
    getUsers, 
    getSingleUser,
} = require("./user.controller");

const userRouter = Router()
.get("/users", getUsers)
.get("/users/:id", getSingleUser)
.post("/users", addUser)

module.exports = { userRouter }