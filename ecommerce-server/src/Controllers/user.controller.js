const { request, response } = require("express");

//others settings
const { SuccessMessage, FailureMessage } = require("../Config/message_code");
const userModels = require("../Models/Users/user.models");

//import users model schema
const UserModel = require("../Models/Users/user.models");

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

    //saving the data
    await newUser.save();

    //send a 201 code if the process has been sucessed
    SuccessMessage.message = "A user has been created";
    resp.status(201).json(SuccessMessage);
  } catch (error) {
    FailureMessage.message = FailureMessage.message + error;
    resp.status(400).json(FailureMessage);
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
    resp.json(users);
  } catch (error) {
    resp.json({
      message: "Error looking up users list",
    });
  }
};

/**
 * Detail a specific user by id
 * @param {*} req
 * @param {*} resp
 */
const DetailUser = async (req, resp) => {
  const { Email } = req.params;
  try {
    //find a user by "Email"
    const user = await UserModel.findOne({ Email: Email });
    resp.json(user);
  } catch (error) {
    FailureMessage.message = "Error looking for a user: " + error;
    resp.status(400).json(FailureMessage);
  }
};

/**
 * Method that update a specific user
 * @param {*} req
 * @param {*} resp
 */
const UpdateUser = async (req, resp) => {
  //destructuring the object that we recieved as params body
  const { Email, Password, UserName } = req.body;

  try {
    const _user = await UserModel.findOne({ Email: req.params.Email });

    //sending response according the searching
    if (_user === null) {
      FailureMessage.message = "We can not find the user to update.";
      resp.status(400).json(FailureMessage);
    } 
    
    //if we found one user matching
    else {
      //edit user by Email
      await userModels.updateOne({ Email }, { Password, UserName });

      //sending results
      SuccessMessage.message = "A user has been updated";
      resp.status(201).json(SuccessMessage);
    }
  } catch (error) {
    FailureMessage.message = "Error by editing the user: " + error;
    resp.status(400).json(FailureMessage);
  }
};

module.exports = { CreateUsers, ListUsers, DetailUser, UpdateUser };
