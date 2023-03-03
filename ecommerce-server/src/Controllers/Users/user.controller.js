const { request, response } = require("express");

//others settings
const { SuccessMessage, FailureMessage } = require("../../Config/message_code");
const userModels = require("../../Models/Users/user.models");

//import users model schema
const UserModel = require("../../Models/Users/user.models");

/**
 * Users Creation,
 * it will be recieved params in json format in order to capture users data
 * @param {*} req
 * @param {*} resp
 */
const CreateUsers = async (req, resp) => {
  try {
    //destructuring the object
    const { Email, Password, Username } = req.body;

    //adding into our model
    const newUser = UserModel({
      Email: Email,
      Password: Password,
      Username: Username,
    });

    //saving the user
    await newUser.save();

    //preparing the object to send
    SuccessMessage.message = "A user has been created";
    SuccessMessage.data = null;

    //send information in json format
    resp.status(201).json(SuccessMessage);
  } catch (error) {
    FailureMessage.message = FailureMessage.message + error;
    resp.status(500).json(FailureMessage);
  }
};

/**
 * Get the list of users
 * @param {*} req
 * @param {*} resp
 */
const ListUsers = async (req, resp) => {
  try {
    const users = await UserModel.find();

    //preparing the object to send
    SuccessMessage.message = "";
    SuccessMessage.data = users;

    //send information in json format
    resp.json(SuccessMessage);
  } catch (error) {
    FailureMessage.message = "Error looking for a user: " + error;
    resp.status(500).json(FailureMessage);
  }
};

/**
 * Detail a specific user by id
 * @param {*} req
 * @param {*} resp
 */
const DetailUser = async (req, resp) => {
  const { _id } = req.params;
  try {
    //find a user by "Email"
    const user = await UserModel.findById({ _id });
      
    //preparing the object to send
    SuccessMessage.message = "";
    SuccessMessage.data = user;

    //send information in json format
    resp.json(SuccessMessage);
  } catch (error) {
    FailureMessage.message = "Error looking for a user: " + error;
    resp.status(500).json(FailureMessage);
  }
};

/**
 * Method that update a specific user
 * @param {*} req
 * @param {*} resp
 */
const UpdateUser = async (req, resp) => {
  //destructuring the object that we recieved as params body
  const { Email, Password, Username } = req.body;
  const _id = req.params._id

  try {
    const _user = await UserModel.findById(_id);

    //sending response according the searching
    if (_user === null) {
      FailureMessage.message = "We can not find the user to update.";
      resp.status(500).json(FailureMessage);
    } 
    
    //if we found one user matching
    else {
      //edit user by Email
      await userModels.findByIdAndUpdate({ _id }, { Email, Password, Username });

      //preparing the object to send
      SuccessMessage.message = "A user has been updated";
      SuccessMessage.data = null;

      //send information in json format
      resp.status(201).json(SuccessMessage);
    }
  } catch (error) {
    FailureMessage.message = "Error by editing the user: " + error;
    resp.status(500).json(FailureMessage);
  }
};

module.exports = { CreateUsers, ListUsers, DetailUser, UpdateUser };
