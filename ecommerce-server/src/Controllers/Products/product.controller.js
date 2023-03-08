const { request, response } = require("express");

//others settings
const { SuccessMessage, FailureMessage } = require("../../Config/message_code");

//import the model
const {ProductModel} = require("../../Models/Products/product.models");

/**
 * Product Creation
 * it will be recieved params in json format in order
 * to catch product data and save them in database
 * @param {*} req
 * @param {*} resp
 */
const CreateProduct = async (req, resp) => {
  try {
    const { Name, Description, Abbr, Url, Price, Tax, inStock, Discount, Category, Color } =
      req.body;

    //verify the consecutive number
    let consecutive = 0;
    let LastItem = await ProductModel.find();

    if (LastItem.length > 0)
      consecutive =
        LastItem.reduce(function (prev, current) {
          return prev.ProductID > current.ProductID ? prev : current;
        }).ProductID + 1;
    else consecutive = 1;

    //adding the data into the model
    const newProduct = ProductModel({
      ProductID: consecutive,
      Name,
      Description,
      Abbr,
      Url,
      Price,
      Tax,
      Discount,
      inStock,
      Category,
      Color
    });

    //save product
    await newProduct.save();

    //preparing the object to send
    SuccessMessage.message = "A product has been created";
    SuccessMessage.data = null;

  //send information in json format
  resp.status(201).json(SuccessMessage);
  } catch (error) {
    FailureMessage.message = FailureMessage.message + error;
    FailureMessage.data = null;
    resp.status(400).json(FailureMessage);
  }
};

/**
 * Get the list of products
 * @param {*} req
 * @param {*} resp
 */
const ListProduct = async (req, resp) => {
  try {
    const products = await ProductModel.find();

    //preparing the object to send
    SuccessMessage.data = products;
    SuccessMessage.message = "";

    //send information in json format
    resp.json(SuccessMessage);
  } catch (error) {
    FailureMessage.message = "Error looking for a product: " + error;
    FailureMessage.data = null;
    resp.status(500).json(FailureMessage);
  }
};

/**
 * Detail a specific product by id
 * @param {*} req
 * @param {*} resp
 */
const DetailProduct = async (req, resp) => {
  const { _id } = req.params;
  try {
    //find a user by "Email"
    const product = await ProductModel.findById({ _id });

    //preparing the object to send
    SuccessMessage.data = product;
    SuccessMessage.message = "";

    //send information in json format
    resp.json(SuccessMessage);
  } catch (error) {
    FailureMessage.message = "Error looking for a product: " + error;
    FailureMessage.data = null;
    resp.status(500).json(FailureMessage);
  }
};

/**
 * edit a specific product
 * @param {*} req
 * @param {*} resp
 */
const UpdateProduct = async (req, resp) => {};

//export methods
module.exports = { CreateProduct, ListProduct, DetailProduct, UpdateProduct };
