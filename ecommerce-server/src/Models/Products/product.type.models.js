const mongoose = require("mongoose");

const TypeSchema = new mongoose.Schema({
    DateAt: { type: Date, trim: true, require: true}, 
    Description: { type: String, unique: true,  trim: true, require: true, lowercase: false}
});


//export schema and model
const TypeProductModel = mongoose.model("Type", TypeSchema);
module.exports = {TypeProductModel, TypeSchema}