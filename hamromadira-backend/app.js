const express = require("express");
const app = express();
const cors = require("cors");
const { DB_URL } = require("./utils/config");
const mongoose = require("mongoose");
const { info } = require("./utils/logger");
const loginController = require("./controllers/login");
const userController = require("./controllers/user");
const productController = require("./controllers/product");
const cartController = require("./controllers/cart");
const orderController = require("./controllers/order");
const { requestLogger, unknownEndpoint } = require("./utils/middleware");

app.use(cors());
app.use(express.static("build"));
app.use(express.json());

mongoose.set("strictQuery", false);
mongoose
  .connect(DB_URL)
  .then(() => {
    info("DB connected Successfully");
  })
  .catch((err) => info(err));

app.use("/api/user", userController);
app.use("/api/products", productController);
app.use("/api/order", orderController);
app.use("/api/cart", cartController);
app.use("/api/login", loginController);

app.get("/", (req, res) => {
  res.send("Hamro Madira app");
});

app.use(unknownEndpoint);

app.use(requestLogger);
module.exports = app;
