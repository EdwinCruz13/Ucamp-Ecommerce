const mongoose = require('mongoose')
//other subschema
const { CategorySchema } = require('./product.category.models')
const { ColorSchema } = require('./product.color.models')

const ProductSchema = new mongoose.Schema(
  {
    ProductID: { type: Number, unique: true, require: true, trim: true },
    Category: CategorySchema,
    Color: ColorSchema,
    Name: { type: String, unique: true, trim: true, lowercase: false, require: true },
    Description: { type: String, trim: true, lowercase: false, require: true },
    Abbr: { type: String, trim: true, lowercase: false, require: true },
    Url: { type: String, trim: true, lowecase: true, require: true },
    Price: { type: Number, require: true, require: true },
    Tax: { type: Number, require: true },
    Discount: { type: Number, require: true },
    inStock: { type: Boolean, require: true },
  },
  { timestamps: true },
)

//export model
const ProductModel = mongoose.model('Product', ProductSchema)
module.exports = { ProductModel, ProductSchema }
