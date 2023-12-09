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
    const { cart } = await User.findById(userId, "cart");
    const cartCheck = cart.filter((item) => item.skus === cartProd.skus);
    const isDuplicate = cartCheck.length > 0;
    if (isDuplicate) {
      let result = await User.updateOne(
        { _id: userId, "cart.skus": cartProd.skus },
        { $set: { "cart.$.quantity": cartProd.quantity } }
      );
      if (result.acknowledged) {
        return res
          .status(200)
          .json({ quantity: cartProd.quantity, skus: cartProd.skus });
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
    res.status(200).json(cartProd);
  } catch (error) {
    res.status(400).json(error);
  }
});

// cartRoute.put("/edit/:userid", async (req, res) => {
//   const userId = req.params.userid;
//   const { prodCount, skus } = req.body;
//   try {
//     const result = await User.updateOne(
//       { _id: userId, "cart.skus": skus },
//       { $set: { "cart.$.quantity": prodCount } }
//     );
//     if (result.acknowledged) {
//       return res.status(200).json({ quantity: prodCount, skus });
//     }
//     return res.status(500).json(result);
//   } catch (error) {
//     res.status(400).json(error);
//   }
// });

cartRoute.delete("/remove/:userid", async (req, res) => {
  const userId = req.params.userid;
  const { skus } = req.body;
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
});

module.exports = cartRoute;
