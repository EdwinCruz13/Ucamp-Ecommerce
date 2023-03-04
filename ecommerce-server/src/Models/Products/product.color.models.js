const mongoose = require("mongoose");

const ColorSchema = new mongoose.Schema({
    Color: { type: String, trim: true, require: true },
    Hexadecimal: { type: String, unique:true, trim: true, require: true },
    RGB: { type: String, trim: true, require: true },
    DateAt: { type: Date, require: true, default: Date.Now}
});


//export schema and model
const ColorModel = mongoose.model("Color", ColorSchema);
module.exports = { ColorModel, ColorSchema }