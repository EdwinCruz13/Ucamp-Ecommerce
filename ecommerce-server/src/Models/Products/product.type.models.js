const mongoose = require("mongoose");

const TypeSchema = new mongoose.Schema({
    TypeID: { type: String, trim: true, require: true, _id: false }, 
    Description: { type: String, trim: true, require: true}
}, { _id: false });


//export schema and model
const TypeModel = mongoose.model("Type", TypeSchema);
module.exports = {TypeModel, TypeSchema}