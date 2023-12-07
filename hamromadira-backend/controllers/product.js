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
// get categories of product
productRoute.get("/category", async (req, res) => {
  try {
    const result = await Product.find({}, "categoryId");
    const categories = new Set(result.map((value) => value.categoryId));
    res.status(200).json([...categories]);
  } catch (error) {
    res.status(400).json(error);
  }
});

// recommended items api
productRoute.get("/recommended/:skus", async (req, res) => {
  const sku = req.params.skus;
  const searchItem = sku.split("_")[0];
  const regexPattern = new RegExp(searchItem, "i");
  try {
    const result = await Product.find({ productName: regexPattern });
    res.status(200).json(result[0].skus);
  } catch (error) {
    res.status(400).json({ error });
  }
});
//get product categorywise
productRoute.get("/:category", async (req, res) => {
  const category = req.params.category;
  let categoryProduct = [];
  try {
    const result = await Product.find({ categoryId: category });
    result.map((item) => {
      item.skus.map((value) => {
        categoryProduct.push(value);
      });
    });
    res.status(200).json(categoryProduct);
  } catch (error) {
    res.status(400).json({ error });
  }
});

//get detail about particular product
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
      return res.status(200).json(response[0]);
    }
    return res.status(401).json({ error: "item not found" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// update particular product
productRoute.put("/items/:sku", async (req, res) => {
  const itemId = req.params.sku;
  const getItem = itemId.split("_")[0];
  const regexPattern = new RegExp(getItem, "i");
  const { price, quantity, img, feature, alcohol } = req.body;
  try {
    const result = await Product.find({ productName: regexPattern });
    const response = result.map((items) => {
      return items.skus.find((value) => value.sku === itemId);
    });
    if (response[0]) {
      const upDateResult = await Product.updateOne(
        {
          _id: result[0]._id,
          "skus.sku": response[0].sku,
        },
        {
          $set: {
            "skus.$.price": price,
            "skus.$.quantity": quantity,
            "skus.$.img": img,
            "skus.$.feature": feature,
            "skus.$.alcohol": alcohol,
          },
        },
        { new: true }
      );
      return res.status(401).json(upDateResult);
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

// create new product
productRoute.post("/", async (req, res) => {
  const newProduct = req.body;
  try {
    const response = await Product.create(newProduct);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = productRoute;
