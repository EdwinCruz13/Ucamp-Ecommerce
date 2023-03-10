const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//others settings
const { SuccessMessage, FailureMessage } = require("../../Config/message_code");



//import users model and schema
const { UserModel } = require("../../Models/Users/user.models");




const SigupUser = async (req, resp) => {
  try {
    //destructuring the object
    const { Email, Password, Username } = req.body;

    //validate the user
    if(!(Email && Password && Username) ){
      FailureMessage.message = "All inputs are required";
      FailureMessage.data = null;
      return resp.status(400).json(FailureMessage);
    }


    //check an existed user
    if(await UserModel.findOne({Email}))
    {
      FailureMessage.message = Email + " is already registered";
      FailureMessage.data = null;
      return resp.status(400).json(FailureMessage);
    }

    //check an existed user
    if(await UserModel.findOne({Username}))
    {
      FailureMessage.message = `${Username} is already registered`;
      FailureMessage.data = null;
      return resp.status(400).json(FailureMessage);
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


    //preparing the object to send
    SuccessMessage.message = "A user has been created";
    SuccessMessage.data = newUser;

    //send information in json format
    return resp.status(201).json(SuccessMessage);
  } catch (error) {
    FailureMessage.message = FailureMessage.message + error;
    FailureMessage.data = null;
    return resp.status(500).json(FailureMessage);
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
      FailureMessage.message = Email + " has not been found.";
      FailureMessage.data = null;
      return resp.status(400).json(FailureMessage);
    }

    //check the password
    const isPasswordValid = await bcrypt.compare(Password, foundUser.Password);

    if(!isPasswordValid){
      FailureMessage.message = "Invalid password";
      FailureMessage.data = null;
      return resp.status(400).json(FailureMessage);
    }


    //prepare the token
    const token = jwt.sign({
      user_id: foundUser._id, 
      Email: foundUser.Email, 
      Username: foundUser.Username
    }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: process.env.TOKEN_EXPIRE});
    foundUser.Token = token;


    //in any case evertthin is ok
    //preparing the object to send
    SuccessMessage.message = "A user has been logged.";
    SuccessMessage.data = foundUser;

    //send response
    return resp.status(200).json(SuccessMessage);


  } catch (error) {
    FailureMessage.message = FailureMessage.message + error;
    FailureMessage.data = null;
    return resp.status(500).json(FailureMessage);
  }
}


module.exports = { LoginUser, SigupUser };
