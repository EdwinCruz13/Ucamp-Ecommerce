const { request, response } = require("express");

//others settings
const {MessageResponse}  = require("../../Config/message_code");

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
    let Message = new MessageResponse("A product has been created", true, null);

    //send information in json format
    return resp.status(201).json(Message.GetMessage());

  } catch (error) {
    let Message = new MessageResponse("There is an error creating a product: " + error, false, null);
    return resp.status(500).json(Message.GetMessage());
  }
};

/**
 * Get the list of products
 * @param {*} req
 * @param {*} resp
 */
const ListProduct = async (req, resp) => {
  try {
    //list all the products
    const products = await ProductModel.find();

   //preparing the object to send
   let Message = new MessageResponse("", true, products);

   //send information in json format
   return resp.status(200).json(Message.GetMessage());

  } catch (error) {
    let Message = new MessageResponse("There is an error listing a product: " + error, false, null);
    return resp.status(500).json(Message.GetMessage());
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
    let Message = new MessageResponse("", true, product);

   //send information in json format
   return resp.status(200).json(Message.GetMessage());

  } catch (error) {
    let Message = new MessageResponse("There is an error detailing a product: " + error, false, null);
    return resp.status(500).json(Message.GetMessage());
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
