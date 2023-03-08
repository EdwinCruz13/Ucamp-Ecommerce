const { Router } = require("express");
const { CreateCategory, ListCategory, DetailCategory, UpdateCategory } = require("../../Controllers/Products/product.category.controller")



const router = Router();

/* ----------------------------------------------------
  defining routes
----------------------------------------------------*/
//create type of products route
router.post("/create", CreateCategory);

//listing type of type of products
router.get("/list", ListCategory);

//detailing of a user
router.get("/detail/:_id", DetailCategory);

//editing a user route
router.put("/update/:_id", UpdateCategory);


//export the router
module.exports = router;