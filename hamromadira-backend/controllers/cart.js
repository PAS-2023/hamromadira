const cartRoute = require("express").Router();
const { User } = require("../models/index");
const { tokenExtractor, userExtractor } = require("../utils/middleware");

cartRoute.get("/", tokenExtractor, userExtractor, async (req, res) => {
  try {
    const userId = req.userId;
    const result = await User.findById(userId, "cart");
    res.status(200).json(result.cart);
  } catch (error) {
    res.status(400).json(error);
  }
});

cartRoute.put("/edit", tokenExtractor, userExtractor, async (req, res) => {
  const userId = req.userId;
  const cartProd = req.body;
  try {
    const { cart } = await User.findById(userId, "cart");
    const cartCheck = cart.filter((item) => item.skus === cartProd.skus);
    const isDuplicate = cartCheck.length > 0;
    if (isDuplicate) {
      let result = await User.updateOne(
        { _id: userId, "cart.skus": cartProd.skus },
        { $set: { "cart.$.quantity": cartProd.quantity } }
      );
      if (result.acknowledged) {
        return res.status(200).json({ ...cartProd, skus: cartProd.skus });
      }
      return res.status(200).json(result);
    }
    await User.findByIdAndUpdate(
      userId,
      {
        $push: { cart: cartProd },
      },
      { new: true }
    );
    console.log("hallo world");
    return res.status(200).json(cartProd);
  } catch (error) {
    res.status(400).json(error);
  }
});

// cartRoute.delete(
//   "/remove/all",
//   tokenExtractor,
//   userExtractor,
//   async (req, res) => {
//     const userId = req.userId;
//     try {
//       const result = await User.findByIdAndUpdate(
//         { _id: userId },
//         { cart: [] },
//         { new: true }
//       );
//       res.status(200).json(result.cart);
//     } catch (error) {
//       res.status(400).json({ error });
//     }
//   }
// );

cartRoute.delete(
  "/remove/:skus",
  tokenExtractor,
  userExtractor,
  async (req, res) => {
    const userId = req.userId;
    const skus = req.params.skus;
    try {
      await User.findByIdAndUpdate(
        { _id: userId },
        { $pull: { cart: { skus: skus } } },
        { new: true }
      );

      return res.status(200).json({ skus });
    } catch (error) {
      res.status(400).json(error);
    }
  }
);

module.exports = cartRoute;
