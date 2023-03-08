const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
    DateAt: { type: Date, trim: true, require: true}, 
    Description: { type: String, unique: true,  trim: true, require: true, lowercase: false}
});


//export schema and model
const CategoryModel = mongoose.model("Category", CategorySchema);
module.exports = {CategoryModel, CategorySchema}