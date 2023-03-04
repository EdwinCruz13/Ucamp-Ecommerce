const { SuccessMessage, FailureMessage } = require("../../Config/message_code");
const { ColorModel } = require("../../Models/Products/product.color.models");

/**
 * creating a new color
 * @param {*} request 
 * @param {*} response 
 */
const CreateColor = async (request, response) => {
  try {
    const { Color, Hexadecimal } = request.body;
    const _RGB = hexToRgb(Hexadecimal);

   

    //defining a model to save
    const newColor = ColorModel({
      Color,
      Hexadecimal,
      RGB: _RGB,
      DateAt: Date.now()
    });

    //save a new color
    await newColor.save();

    //preparing the object to send as response
    SuccessMessage.message = "A color has been created";
    SuccessMessage.data = null;

    //send the response using a json format.
    response.status(201).json(SuccessMessage);
  } catch (error) {
    FailureMessage.message = FailureMessage.message + error;
    FailureMessage.data = null;
    response.status(500).json(FailureMessage);
  }
};

/**
 * listing all the colors
 * @param {*} request 
 * @param {*} response 
 */
const ListColor = async (request, response) => {
  try {
    //consulting to database
    const Colors = await ColorModel.find();

    //preparing the message to send
    SuccessMessage.message = "";
    SuccessMessage.data = Colors;

    //send the message in json format
    response.status(201).json(SuccessMessage);
  } catch (error) {
    FailureMessage.message = FailureMessage.message + error;
    FailureMessage.data = null;
    response.status(500).json(FailureMessage);
  }
};

/**
 * detailing a specific color
 * @param {*} request 
 * @param {*} response 
 */
const DetailColor = async (request, response) => {
  try {
    //find a color by ID
    const color = await ColorModel.findById(request.params._id);
    console.log(color)

    //preparing the object to send
    SuccessMessage.message = "";
    SuccessMessage.data = color;

    //send the response in json format
    response.status(201).json(SuccessMessage);
  } catch (error) {
    FailureMessage.message = FailureMessage.message + error;
    FailureMessage.data = null;
    response.status(500).json(FailureMessage);
  }
};

/**
 * updating a specific color
 * @param {*} request 
 * @param {*} response 
 */
const UpdateColor = async (request, response) => {
  try {
    const { Color, Hexadecimal } = request.body;
    const _RGB = hexToRgb(Hexadecimal);

    //update changes
    await ColorModel.findByIdAndUpdate({ _id: request.params._id }, { Color, Hexadecimal, RGB: _RGB });

    //preparing the object to send
    SuccessMessage.message = "A color has been updated";
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
 * convert to hexadecimal to rgb format
 * @param {*} hex 
 * @returns 
 */
const hexToRgb = (hex) => {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  let rgb = null;
  rgb =
    "(" +
    parseInt(result[1], 16).toString() +
    ", " +
    parseInt(result[2], 16).toString() +
    ", " +
    parseInt(result[3], 16).toString() +
    ")";

  return rgb;
  /*return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;*/
};

module.exports = { CreateColor, ListColor, DetailColor, UpdateColor };
