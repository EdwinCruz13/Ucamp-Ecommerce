const mongoose = require("mongoose"); 

const { UserSchema } = require("../Users/user.models");

//create a new schem
const InvoiceSchema = new mongoose.Schema({
    InvoiceID: { type: String, require: true, trim: true },
    Customer: UserSchema,
    Transfer: { type: Boolean, require: true },
    Comments: { type: String, require: false, trim: true, lowercase: true},
    TotalAmount: { type: Number, require: true},
    DateAt : { type: Date,  require: true, default: Date.Now },


}, { timestamps: true });

//export the model
const InvoiceModel = mongoose.model("Invoices", InvoiceSchema);
module.exports = {InvoiceModel, InvoiceSchema};