const cartRoute = require("express").Router();
const { Cart } = require("../models/index");

cartRoute.get("/", async (req, res) => {
  try {
    const response = await Cart.find({});
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error });
  }
});

cartRoute.post("/", async (req, res) => {
  const newCart = req.body;
  try {
    const response = await Cart.create(newCart);
    res.status(200).json(response);
  } catch (error) {
    res.status(200).json({ error });
  }
});

module.exports = cartRoute;