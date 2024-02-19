const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a product name"],
    },

    quantity: {
      type: Number,
      required: [true, "Please provide the quantity of this product"],
      default: 0,
    },

    price: {
      type: Number,
      required: [true, "Price is required"],
      default: 0,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
