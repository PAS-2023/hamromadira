const cartRoute = require("express").Router();
const { User } = require("../models/index");

cartRoute.get("/:userId", async (req, res) => {
  const userId = req.params.userId;
  try {
    const result = await User.findById(userId, "cart");
    res.status(200).json(result.cart);
  } catch (error) {
    res.status(400).json(error);
  }
});

cartRoute.put("/:userid", async (req, res) => {
  const userId = req.params.userid;
  const cartProd = req.body;
  try {
    const result = await User.findByIdAndUpdate(
      userId,
      {
        $push: { cart: cartProd },
      },
      { new: true }
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error);
  }
});

cartRoute.put("/edit/:userid", async (req, res) => {
  const userId = req.params.userid;
  const { prodCount, skus } = req.body;
  try {
    const result = await User.updateOne(
      { _id: userId, "cart.skus": skus },
      { $set: { "cart.$.quantity": prodCount } }
    );

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error);
  }
});

cartRoute.delete("/remove/:userid", async (req, res) => {
  const userId = req.params.userid;
  const { skus } = req.body;
  try {
    const result = await User.updateOne(
      { _id: userId },
      { $pull: { cart: { skus: skus } } },
      { new: true }
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = cartRoute;
