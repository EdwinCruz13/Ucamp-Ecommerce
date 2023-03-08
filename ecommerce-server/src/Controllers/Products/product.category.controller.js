const { request, response } = require("express");

//others settings
const { SuccessMessage, FailureMessage } = require("../../Config/message_code");

//import the model
const {
  CategoryModel,
} = require("../../Models/Products/product.category.models");

/**
 * create a new type of product
 * @param {*} request
 * @param {*} response
 */
const CreateCategory = async (request, response) => {
  try {
    //get the params from the header request
    const { Description } = request.body;

    //keep an object
    const newType = CategoryModel({
      DateAt: Date.now(),
      Description: Description,
    });

    //save the type of product
    await newType.save();

    //preparing the object to send
    SuccessMessage.message = "A Type of product has been created";
    SuccessMessage.data = null;

    //send the information in json format
    response.status(201).json(SuccessMessage);
  } catch (error) {
    FailureMessage.message = FailureMessage.message + error;
    FailureMessage.data = null;
    response.status(500).json(FailureMessage);
  }
};

/**
 * Listing the list of type of products
 * @param {*} request
 * @param {*} response
 */
const ListCategory = async (request, response) => {
  try {
    const Types = await CategoryModel.find();

    //preparing the object to send
    SuccessMessage.message = "";
    SuccessMessage.data = Types;

    //send the information in json format
    response.status(201).json(SuccessMessage);
  } catch (error) {
    FailureMessage.message = FailureMessage.message + error;
    FailureMessage.data = null;
    response.status(500).json(FailureMessage);
  }
};

const DetailCategory = async (request, response) => {
  try {
    const Type = await CategoryModel.findById(request.params._id);

    //preparing the object to send
    SuccessMessage.message = "";
    SuccessMessage.data = Type;

    //send the information in json format
    response.status(201).json(SuccessMessage);
  } catch (error) {
    FailureMessage.message = FailureMessage.message + error;
    FailureMessage.data = null;
    response.status(500).json(FailureMessage);
  }
};

const UpdateCategory = async (request, response) => {
  try {
    const { Description } = request.body;

    const Type = await CategoryModel.findByIdAndUpdate(
      { _id: request.params._id },
      { Description: Description }
    );

    //preparing the object to send
    SuccessMessage.message = "";
    SuccessMessage.data = null;

    //send the information in json format
    response.status(201).json(SuccessMessage);
  } catch (error) {
    FailureMessage.message = FailureMessage.message + error;
    FailureMessage.data = null;
    response.status(500).json(FailureMessage);
  }
};







//export the arrow method
module.exports = { CreateCategory, ListCategory, DetailCategory, UpdateCategory };
