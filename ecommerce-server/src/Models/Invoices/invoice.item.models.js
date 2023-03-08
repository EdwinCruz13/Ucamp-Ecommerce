const mongoose = require("mongoose");

const { InvoiceSchema } = require("./invoice.models");
const { ProductSchema } = require("../Products/product.models");

const InvoiceItems_Schema = new mongoose.Schema(
  {
    Invoice: InvoiceSchema,
    Products: [ProductSchema],
    Quantity: { type: Number, require: true },
    CostPerUnit: { type: Number, require: true },
    Amount: { type: Number, require: true },
  },
  { timeseries: true }
);

//export the invoice detail
module.exports = mongoose.model("InvoiceItems", InvoiceItems_Schema);
