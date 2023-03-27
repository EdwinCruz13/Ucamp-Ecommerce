const mongoose = require("mongoose");

//get the product schema
const { ProductSchema } = require("../Products/product.models");
const { UserSchema } = require("../Users/user.models");

/**
 * creating a cart schema
 */
const CartSchema = new mongoose.Schema(
  {
    Customer: UserSchema,
    Products: { ProductSchema },
  },
  { timeseries: true }
);


module.exports = mongoose.model("ShopingCart", CartSchema)