const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema(
  {
    district: { type: String, required: true },
    city: { type: String, required: true },
    landmark: { type: String, required: false },
  },
  { _id: false }
);

const userSchema = new mongoose.Schema({
  fullname: { type: String, required: true, minLength: 3 },
  username: { type: String, required: true, minLength: 3 },
  password: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: [addressSchema],
  userType: {
    type: String,
    required: true,
    enum: { values: ["admin", "user"], message: "{VALUE} is not supported" },
  },
  order: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],
  isDisabled: { type: Boolean, required: true, default: false },
  cart: [{ type: mongoose.Schema.Types.ObjectId, ref: "Cart" }],
});

module.exports = userSchema;
