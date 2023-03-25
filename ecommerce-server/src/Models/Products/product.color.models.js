const mongoose = require("mongoose");

const ColorSchema = new mongoose.Schema({
    Color: { type: String, trim: true, require: true },
    Hexadecimal: { type: String, trim: true },
    RGB: { type: String, trim: true},
});


//export schema and model
const ColorModel = mongoose.model("Color", ColorSchema);
module.exports = { ColorModel, ColorSchema }