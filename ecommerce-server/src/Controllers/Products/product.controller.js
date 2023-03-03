const { request, response } = require("express");

//others settings
const { SuccessMessage, FailureMessage } = require("../../Config/message_code");

//import the model
const ProductModel = require("../../Models/Products/product.models");

/**
 * Product Creation
 * it will be recieved params in json format in order
 * to catch product data and save them in database
 * @param {*} req
 * @param {*} resp
 */
const CreateProduct = async (request, response) => {
  try {
    const { Name, Description, Abbr, Url, Price, Tax, inStock, Type } =
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
      Name,
      ProductID: consecutive,
      Type,
      Description,
      Abbr,
      Url,
      Price,
      Tax,
      inStock,
    });

    //save product
    await newProduct.save();

    //send a 201 code if the process has been sucessed
    SuccessMessage.message = "A product has been created";
    response.status(201).json(SuccessMessage);
  } catch (error) {
    FailureMessage.message = FailureMessage.message + error;
    response.status(400).json(FailureMessage);
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
    resp.json(products);
  } catch (error) {
    FailureMessage.message = "Error looking for a product: " + error;
    resp.status(400).json(FailureMessage);
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
    resp.json(product);
  } catch (error) {
    FailureMessage.message = "Error looking for a product: " + error;
    resp.status(400).json(FailureMessage);
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
