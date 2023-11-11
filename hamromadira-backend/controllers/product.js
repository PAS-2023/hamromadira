const productRoute = require("express").Router();
const { Product } = require("../models/index");

productRoute.get("/", async (req, res) => {
  try {
    const result = await Product.find({});
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

productRoute.post("/", async (req, res) => {
  const newProduct = req.body;
  try {
    // const newProduct = new Product({ ...productObj });
    const response = await Product.create(newProduct);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = productRoute;
