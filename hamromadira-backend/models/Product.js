const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema({
  sku: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  feature: { type: String, required: false },
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
      values: ["RUM", "WHISKY", "SCOTCH", "BRANDY", "WINE", "VODKA"],
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
  productDescription: {
    type: String,
    required: false,
  },
});

module.exports = { productSchema, stockSchema };
