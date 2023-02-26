const mongoose = require("mongoose");

const ColorSchema = new mongoose.Schema({
    ColorID: { type: String, trim: true, require: true},
    Color: { type: String, trim: true, require: true },
    Hexadecimal: { type: String, trim: true, require: true },
    RGB: { type: String, trim: true, require: true }
}, { _id: false });


//export schema and model
const ColorModel = mongoose.model("Color", ColorSchema);
module.exports = { ColorModel, ColorSchema }