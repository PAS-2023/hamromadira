const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  sku: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  alcohol: { type: String, required: true },
});

module.exports = { cartSchema };
