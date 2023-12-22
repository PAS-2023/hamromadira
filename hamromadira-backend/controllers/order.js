const orderRoute = require("express").Router();
const { Order, User } = require("../models/index");
const { tokenExtractor, userExtractor } = require("../utils/middleware");

orderRoute.get("/", tokenExtractor, userExtractor, async (req, res) => {
  try {
    const response = await Order.find({ userID: req.userId });
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error });
  }
});

orderRoute.get("/", tokenExtractor, userExtractor, async (req, res) => {
  try {
    const response = await Order.find();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error });
  }
});

orderRoute.post("/", tokenExtractor, userExtractor, async (req, res) => {
  req.body["userID"] = req.userId;
  req.body["status"] = "placed";
  try {
    const newOrder = new Order(req.body);
    const response = await newOrder.save();
    await User.findByIdAndUpdate({ _id: req.userId }, { cart: [] });
    res.status(200).json(response);
  } catch (error) {
    res.status(200).json({ error });
  }
});

module.exports = orderRoute;
