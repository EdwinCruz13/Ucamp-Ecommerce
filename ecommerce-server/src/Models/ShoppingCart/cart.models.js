const mongoose = require("mongoose");

//get the product schema
const { ProductSchema } = require("../Products/product.models");
const { UserSchema } = require("../Users/user.models");

/**
 * creating a cart schema
 */
const CartSchema = new mongoose.Schema(
  {
    Customer: { _id: { type: String }, Username: { type: String }, Email: { type: String }},
    Products: [{_id: { type: String}, Name: { type: String}, Price: {type: Number}}],
  },
  { timeseries: true }
);

const CartModel = mongoose.model("ShopingCart", CartSchema);
module.exports = { CartModel };
