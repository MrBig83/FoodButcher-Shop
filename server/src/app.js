const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");
const dotenv = require("dotenv").config();
require("express-async-errors");

const { productRouter } = require("./resources/product/product.router");
const { orderRouter } = require("./resources/order/order.router");
const { userRouter } = require("./resources/user/user.router");

const app = express();
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
app.use(
  cookieSession({
    name: "FBS-Session",
    keys: ["aVeryS3cr3tK3y"],
    maxAge: 1000 * 60 * 60 * 24, // 24 Hours
    // sameSite: "strict",
    httpOnly: false,
    secure: false,
  })
);

// Add routers
app.use("/api", productRouter);
app.use("/api", orderRouter);
app.use("/api", userRouter);

app.use((req, res) => {
  console.log("!404!");
  res.status(404).json("Missing resource");
});

module.exports = { app };
