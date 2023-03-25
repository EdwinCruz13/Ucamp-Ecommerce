const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
    Description: { type: String, trim: true, require: true, lowercase: false}
});


//export schema and model
const CategoryModel = mongoose.model("Category", CategorySchema);
module.exports = {CategoryModel, CategorySchema}