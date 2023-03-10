//others settings
const {MessageResponse}  = require("../../Config/message_code");

//import the model
const {
  CategoryModel,
} = require("../../Models/Products/product.category.models");

/**
 * create a new type of product
 * @param {*} request
 * @param {*} response
 */
const CreateCategory = async (req, resp) => {
  try {
    //get the params from the header request
    const { Description } = req.body;

    //keep an object
    const newType = CategoryModel({
      DateAt: Date.now(),
      Description: Description,
    });

    //save the type of product
    await newType.save();

    //preparing the object to send
    let Message = new MessageResponse("A category of product has been created", true, null);

    //send information in json format
    return resp.status(201).json(Message.GetMessage());

  } catch (error) {
    let Message = new MessageResponse("There is an error creating a category: " + error, false, null);
    return resp.status(500).json(Message.GetMessage());
  }
};

/**
 * Listing the list of type of products
 * @param {*} request
 * @param {*} response
 */
const ListCategory = async (req, resp) => {
  try {
    const Types = await CategoryModel.find();

    //preparing the object to send
    let Message = new MessageResponse("", true, Types);

    //send information in json format
    return resp.status(200).json(Message.GetMessage());
  } catch (error) {
    let Message = new MessageResponse("There is an error listing a category: " + error, false, null);
    return resp.status(500).json(Message.GetMessage());
  }
};

const DetailCategory = async (req, resp) => {
  try {
    const Type = await CategoryModel.findById(req.params._id);

     //preparing the object to send
     let Message = new MessageResponse("", true, Type);

     //send information in json format
     return resp.status(200).json(Message.GetMessage());
  } catch (error) {
    let Message = new MessageResponse("There is an error detailing a category: " + error, false, null);
    return resp.status(500).json(Message.GetMessage());
  }
};

const UpdateCategory = async (req, resp) => {
  try {
    const { Description } = req.body;

    const Type = await CategoryModel.findByIdAndUpdate(
      { _id: req.params._id },
      { Description: Description }
    );

    //preparing the object to send
     //preparing the object to send
     let Message = new MessageResponse("A category of product has been updated", true, null);

     //send information in json format
     return resp.status(201).json(Message.GetMessage());
  } catch (error) {
    let Message = new MessageResponse("There is an error updating a category: " + error, false, null);
    return resp.status(500).json(Message.GetMessage());
  }
};







//export the arrow method
module.exports = { CreateCategory, ListCategory, DetailCategory, UpdateCategory };
