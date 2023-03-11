const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//others settings
const { MessageResponse } = require("../../Config/message_code");


//import users model and schema
const { UserModel } = require("../../Models/Users/user.models");




const SigupUser = async (req, resp) => {
  try {
    //destructuring the object
    const { Email, Password, Username } = req.body;

    //validate the user
    if(!(Email && Password && Username) ){
      let message = new MessageResponse("All inputs are required", false, null)
      return resp.status(400).json(message.GetMessage());
    }


    //check an existed user
    if(await UserModel.findOne({Email}))
    {
      let message = new MessageResponse(Email + " is already registered", false, null)
      return resp.status(400).json(message.GetMessage());
    }

    //check an existed user
    if(await UserModel.findOne({Username}))
    {
      let message = new MessageResponse(Username + " is already registered", false, null)
      return resp.status(400).json(message.GetMessage());
    }

    //creating a new user
    const encryptedPass = await bcrypt.hash(Password, 10);
    const newUser = UserModel({
      Email: Email,
      Password: encryptedPass,
      Username: Username,
    });

    //saving the user
    await newUser.save();



    //after the saving, create an webtoken
    const token = jwt.sign(
    { user_id: newUser._id, Email, Username }, 
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.TOKEN_EXPIRE
    });

    newUser.Token = token
    let message = new MessageResponse("A user has been created", true, newUser)
    

    //send information in json format
    return resp.status(201).json(message.GetMessage());
  } catch (error) {
    let message = new MessageResponse("There is an error: " + error, false, null)
    return resp.status(400).json(message.GetMessage());
  }
};

/**
 * Method tha allow logging a user
 * verify an existing user and create a sesion
 * @param {*} req 
 * @param {*} resp 
 */
const LoginUser = async (req, resp) => {
  try {
    //get the email and password from body request
    const { Email, Password } = req.body;
    

    //validate Email
    const foundUser = await UserModel.findOne({ Email });
    if(!foundUser){
      let message = new MessageResponse(Email + " has not been found.", false, null)
      return resp.status(400).json(message.GetMessage());
    }

    //check the password
    const isPasswordValid = await bcrypt.compare(Password, foundUser.Password);

    if(!isPasswordValid){
      let message = new MessageResponse("Invalid password.", false, null)
      return resp.status(400).json(message.GetMessage());
    }


    //prepare the token
    const token = jwt.sign({
      user_id: foundUser._id, 
      Email: foundUser.Email, 
      Username: foundUser.Username
    }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: process.env.TOKEN_EXPIRE});
    foundUser.Token = token;

    //prepare the message
    let message = new MessageResponse("A user has been logged", true, foundUser)
    
    //send information in json format
    return resp.status(201).json(message.GetMessage());


  } catch (error) {
    let message = new MessageResponse("There is an error: " + error, false, null)
    return resp.status(500).json(message.GetMessage());
  }
}


module.exports = { LoginUser, SigupUser };
