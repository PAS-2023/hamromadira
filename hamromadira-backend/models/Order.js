const mongoose = require("mongoose");

const orderProductSchema = new mongoose.Schema(
  {
    sku: { type: String, required: true },
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
  },
  { _id: false }
);

const orderShippingAddress = new mongoose.Schema(
  {
    district: { type: String, required: true },
    city: { type: String, required: true },
    landmark: { type: String, required: false },
  },
  { _id: false }
);

const orderSchema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  paymentMode: {
    type: String,
    enum: {
      values: ["COD", "OP"], //OP->Online Payment
      message: "Please provide a valid payment mode",
    },
  },
  paymentStatus: {
    type: String,
    enum: {
      values: ["processed", "pending"],
      message: "{VALUE} is not supported",
    },
  },
  status: {
    type: String,
    enum: {
      values: ["delivered", "placed", "process"],
      message: "{VALUE} is not supported",
    },
  },
  amount: { type: Number, required: true },
  items: [orderProductSchema],
  shippingAddress: { orderShippingAddress },
});

module.exports = orderSchema;
