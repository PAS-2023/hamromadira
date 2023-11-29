const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema({
  img: { type: String, required: false },
  sku: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  feature: { type: String, required: false },
  alcohol: { type: String, required: true },
});

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
    minLength: 3,
  },
  categoryId: {
    type: String,
    required: true,
    enum: {
      values: [
        "RUM",
        "WHISKY",
        "BRANDY",
        "WINE",
        "VODKA",
        "BEER",
        "SOFT-DRINK",
      ],
      message: "{VALUE} is not supported",
    },
  },
  productBrand: {
    type: String,
    required: true,
  },
  skus: [stockSchema],
  manufacture: {
    type: String,
    required: true,
  },
});

module.exports = { productSchema, stockSchema };
