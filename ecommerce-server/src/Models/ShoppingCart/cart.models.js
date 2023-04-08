const mongoose = require('mongoose')

//get the product schema
const { ProductSchema } = require('../Products/product.models')
const { UserSchema } = require('../Users/user.models')

/**
 * creating a cart schema
 */
const CartSchema = new mongoose.Schema(
  {
    Customer: {
      _id: { type: String },
      Username: { type: String },
      Email: { type: String },
    },
    Products: [
      {
        _id: { type: String },
        Name: { type: String },
        Price: { type: Number },
        Url: { type: String },
        Discount: { type: Number },
        Quantity: { type: Number },
        Total: {
          type: Number,
          default: function () {
            return (this.Price - (this.Price * (this.Discount / 100))).toFixed(2)
          }
        }
      }
    ]
  },
  { timeseries: true },
)

const CartModel = mongoose.model('ShoppingCart', CartSchema)
module.exports = { CartModel, CartSchema }
