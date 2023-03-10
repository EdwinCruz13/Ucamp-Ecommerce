const {MessageResponse}  = require("../../Config/message_code");
const { ColorModel } = require("../../Models/Products/product.color.models");

/**
 * creating a new color
 * @param {*} request 
 * @param {*} response 
 */
const CreateColor = async (request, resp) => {
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
    let Message = new MessageResponse("A color has been created", true, null);

    //send information in json format
    return resp.status(201).json(Message.GetMessage());

  } catch (error) {
    let Message = new MessageResponse("Error creating a color: " + error, false, null);
    return resp.status(500).json(Message.GetMessage());
  }
};

/**
 * listing all the colors
 * @param {*} request 
 * @param {*} response 
 */
const ListColor = async (request, resp) => {
  try {
    //consulting to database
    const Colors = await ColorModel.find();

    //preparing the message to send
    let Message = new MessageResponse("", true, Colors);

    //send information in json format
    return resp.status(200).json(Message.GetMessage());

  } catch (error) {
    let Message = new MessageResponse("There is an error listing colors: " + error, false, null);
    return resp.status(500).json(Message.GetMessage());
  }
};

/**
 * detailing a specific color
 * @param {*} request 
 * @param {*} response 
 */
const DetailColor = async (request, resp) => {
  try {
    //find a color by ID
    const color = await ColorModel.findById(request.params._id);
    console.log(color)

    //preparing the object to send
    let Message = new MessageResponse("", true, color);

    //send information in json format
    return resp.status(200).json(Message.GetMessage());
  } catch (error) {
    let Message = new MessageResponse("There is an error detailing a color: " + error, false, null);
    return resp.status(500).json(Message.GetMessage());
  }
};

/**
 * updating a specific color
 * @param {*} request 
 * @param {*} response 
 */
const UpdateColor = async (request, resp) => {
  try {
    const { Color, Hexadecimal } = request.body;
    const _RGB = hexToRgb(Hexadecimal);

    //update changes
    await ColorModel.findByIdAndUpdate({ _id: request.params._id }, { Color, Hexadecimal, RGB: _RGB });

   //preparing the message to send
   let Message = new MessageResponse("A color has been updated", true, null);

   //send information in json format
   return resp.status(201).json(Message.GetMessage());


  } catch (error) {
    let Message = new MessageResponse("There is an error updating a color: " + error, false, null);
    return resp.status(500).json(Message.GetMessage());
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
