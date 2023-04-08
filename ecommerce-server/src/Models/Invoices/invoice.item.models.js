const mongoose = require('mongoose')

const { ProductSchema } = require('../Products/product.models')
const InvoiceItems_Schema = new mongoose.Schema(
  {

    ProductID: { type: String },
    Name: { type: String },
    Price: { type: Number },
    Url: { type: String },
    Discount: { type: Number, require: true },
    Quantity: { type: Number, require: true },
    Total: {type: Number, require: true}
  },
  { timeseries: true },
)

//export model
const InvoiceItemsModel = mongoose.model('InvoiceItems', InvoiceItems_Schema)
module.exports = { InvoiceItemsModel, InvoiceItems_Schema }
