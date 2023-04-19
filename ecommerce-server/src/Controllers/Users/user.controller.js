const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//others settings
const {MessageResponse}  = require("../../Config/message_code");

//import users model and schema
const {UserModel} = require("../../Models/Users/user.models");

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

    //validate the user
    if(!(Email && Password && Username) ){
      let Message = new MessageResponse("All inputs are required", false, null);
      return resp.status(400).json(Message.GetMessage());
    }


    //check an existed user
    if(await UserModel.findOne({Email}))
    {
      let Message = new MessageResponse(Email + " is already registered", false, null);
      return resp.status(400).json(Message.GetMessage());
    }

    //check an existed user
    if(await UserModel.findOne({Username}))
    {
      let Message = new MessageResponse(`${Username} is already registered`, false, null);
      return resp.status(400).json(Message.GetMessage());
    }


    //creating a new user
    const encryptedPass = await bcrypt.hash(Password, 10);
    const newUser = UserModel({
      Email: Email,
      Password: encryptedPass,
      Username: Username,
      IsAdministrator: false,
    });

    //saving the user
    await newUser.save();

    //preparing the object to send
    let Message = new MessageResponse("A user has been created", true, null);

    //send information in json format
    return resp.status(201).json(Message.GetMessage());


  } catch (error) {
    let Message = new MessageResponse("There is an error creating a user: " + error, false, null);
    return resp.status(500).json(Message.GetMessage());
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
    let Message = new MessageResponse("", true, users);

    //send information in json format
    return resp.status(200).json(Message.GetMessage());


  } catch (error) {
    let Message = new MessageResponse(error, false, null);
    return resp.status(500).json(Message.GetMessage());
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
    let Message = new MessageResponse("", true, user);

    //send information in json format
    return resp.status(200).json(Message.GetMessage());

  } catch (error) {
    let Message = new MessageResponse(error, false, null);
    return resp.status(500).json(Message.GetMessage());
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
      let Message = new MessageResponse('We can not find the user to update.', false, null);
      return resp.status(400).json(Message.GetMessage());
    } 
    
    //if we found one user matching
    else {
      //edit user by Email
      const encryptedPass = await bcrypt.hash(Password, 10);
      await UserModel.findByIdAndUpdate({ _id }, { Email, Password: encryptedPass, Username });

      //preparing the object to send
      let Message = new MessageResponse("A user has been updated", true, null);

      //send information in json format
      return resp.status(201).json(Message.GetMessage());
    }
  } catch (error) {
    let Message = new MessageResponse("There is an error updating the user: " + error, false, null);
    return resp.status(500).json(Message.GetMessage());
  }
};

module.exports = { CreateUsers, ListUsers, DetailUser, UpdateUser };
