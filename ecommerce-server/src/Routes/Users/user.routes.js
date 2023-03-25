const { Router } = require("express");

const { Auth_Authorization } = require("../../Middleware/auth.middleware");
const { CreateUsers, ListUsers, DetailUser, UpdateUser } = require("../../Controllers/Users/user.controller");
const { SigupUser, LoginUser } = require("../../Controllers/Auths/auth.controller");

const { MessageResponse } = require("../../Config/message_code");



const router = Router();
/* ----------------------------------------------------
  defining routes
----------------------------------------------------*/

//creating users routes
router.post("/signup", SigupUser);

//validate a new users
router.post("/login", LoginUser);

router.get("/auth-access", Auth_Authorization, (req, resp) => {
  let message = new MessageResponse("You are authorized to access me", true, req.user)
  resp.status(200).json(message.GetMessage());
});


//creating a new user
router.post("/create", CreateUsers);

//listing of users, 
//add the token in order to verify the private access
router.get("/list", ListUsers);

//detailing of a user
router.get("/detail/:_id", DetailUser);

//editing a user route
router.put("/update/:_id", UpdateUser);




module.exports = router;