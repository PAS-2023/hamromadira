/* eslint-disable no-console */
const userRoute = require("express").Router();
const { User } = require("../models/index");
const { tokenExtractor, userExtractor } = require("../utils/middleware");
const bcrypt = require("bcrypt");

userRoute.get("/", async (req, res) => {
  try {
    const result = await User.find({});
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
});

userRoute.post("/signup", async (req, res) => {
  const newUser = req.body;
  if (newUser.password.length < 3) {
    return res.status(403).json({
      error: "`password` is shorter than the min allowed length (3).",
    });
  }
  const saltRounds = 10;
  try {
    const passwordHash = await bcrypt.hash(newUser.password, saltRounds);
    const response = await User.create({
      ...newUser,
      password: passwordHash,
      userType: "user",
      isDisabled: false,
      address: [],
      cart: [],
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

userRoute.put("/address", tokenExtractor, userExtractor, async (req, res) => {
  const newAddress = req.body;
  try {
    const response = await User.findByIdAndUpdate(
      req.userId,
      {
        $push: { address: newAddress },
      },
      { new: true }
    );
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error);
  }
});

userRoute.put(
  "/address/:aID",
  tokenExtractor,
  userExtractor,
  async (req, res) => {
    const aId = req.params.aID;
    try {
      const response = await User.updateOne(
        {
          _id: req.userId,
          "address._id": aId,
        },
        {
          $set: {
            "address.$.district": req.body.district,
            "address.$.city": req.body.city,
            "address.$.landmark": req.body.landmark,
          },
        }
      );
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json(error);
    }
  }
);

module.exports = userRoute;
