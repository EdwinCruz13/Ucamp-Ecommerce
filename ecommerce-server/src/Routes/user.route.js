const { Router } = require("express");
const { CreateUsers, ListUsers, DetailUser, UpdateUser } = require("../Controllers/user.controller");



const router = Router();
/* ----------------------------------------------------
  defining routes
----------------------------------------------------*/
//creating users routes
router.post("/create", CreateUsers);

//listing of users
router.get("/list", ListUsers);

//detailing of a user
router.get("/detail/:_id", DetailUser);

//editing a user route
router.put("/update/:_id", UpdateUser);




module.exports = router;