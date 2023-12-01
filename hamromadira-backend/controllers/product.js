const productRoute = require("express").Router();
const { Product, Cart } = require("../models/index");

productRoute.get("/", async (req, res) => {
  try {
    const result = await Product.find({});
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

productRoute.get("/items", async (req, res) => {
  let prodList = [];
  try {
    const result = await Product.find({});
    result.map((products) => {
      products.skus.map((item) => prodList.push(item));
    });
    res.status(200).json(prodList);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

productRoute.get("/items/:sku", async (req, res) => {
  const itemId = req.params.sku;
  const getItem = itemId.split("_")[0];
  const regexPattern = new RegExp(getItem, "i");
  try {
    const result = await Product.find({ productName: regexPattern });
    const response = result.map((items) => {
      return items.skus.find((value) => value.sku === itemId);
    });
    if (response[0]) {
      return res.status(200).json(response);
    }
    return res.status(401).json({ error: "item not found" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

productRoute.get("/:id", async (req, res) => {
  const prodId = req.params.id;
  try {
    const result = await Product.findById(prodId);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
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
