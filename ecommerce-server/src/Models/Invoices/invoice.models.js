const mongoose = require("mongoose"); 

const { CartSchema } = require("../ShoppingCart/cart.models");
const { InvoiceItems_Schema } = require("./invoice.item.models");

//create a new schem
const InvoiceSchema = new mongoose.Schema({
    Customer: {
        _id: {type: String, require: true},
        Email: { type: String, require: true},
        Username: { type: String, require: true}
    },
    Tax: {type: Number, require: true},
    Products: [InvoiceItems_Schema], 
    TotalToPay: { type: Number, require: true},

    //save a copy
    Cart: CartSchema


}, { timestamps: true });

//export the model
const InvoiceModel = mongoose.model("Invoices", InvoiceSchema);
module.exports = {InvoiceModel, InvoiceSchema};