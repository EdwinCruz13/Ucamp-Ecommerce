const { Router } = require("express");
const { CreateType, ListType, DetailType, UpdateType } = require("../../Controllers/Products/product.type.controller")



const router = Router();

/* ----------------------------------------------------
  defining routes
----------------------------------------------------*/
//create type of products route
router.post("/create", CreateType);

//listing type of type of products
router.get("/list", ListType);

//detailing of a user
router.get("/detail/:_id", DetailType);

//editing a user route
router.put("/update/:_id", UpdateType);


//export the router
module.exports = router;