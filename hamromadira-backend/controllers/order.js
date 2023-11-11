const orderRoute = require("express").Router();
const { Order } = require("../models/index");

orderRoute.get("/", async (req, res) => {
  try {
    const response = await Order.find({});
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error });
  }
});

orderRoute.post("/", async (req, res) => {
  const newOrder = req.body;
  try {
    const response = await Order.create(newOrder);
    res.status(200).json(response);
  } catch (error) {
    res.status(200).json({ error });
  }
});

module.exports = orderRoute;
