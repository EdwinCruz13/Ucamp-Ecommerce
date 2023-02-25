const mongoose = require("mongoose");

const Type = new mongoose.Schema({
    TypeID: { type: String, trim: true, require: true, _id: false, }, 
    Description: { type: String, trim: true, require: true}
}, { _id: false })

const ProductSchema = new mongoose.Schema({
    ProductID: { type: String, require: true, trim: true, unique: true }, 
    Type: Type,
    Name: { type: String, trim: true, lowercase: false, require: true},
    Description: { type: String, trim: true, lowercase: false, require: true},
    Abbr: {type: String, trim: true, lowercase: false, require: true},
    Url: { type: String, trim: true, lowecase:true, require: true},
    Price: { type: Number, require: true, require: true},
    Tax: { type: Number, require: true },
    inStock: { type: Boolean, require: true}
}, { timestamps: true });

//export schema
module.exports = mongoose.model("Product", ProductSchema);
