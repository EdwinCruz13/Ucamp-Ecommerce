const { Router } = require("express");
const { CreateProduct, ListProduct, DetailProduct, UpdateProduct } = require("../../Controllers/Products/product.controller");



const router = Router();
/* ----------------------------------------------------
  defining routes
----------------------------------------------------*/
//creating users routes
router.post("/create", CreateProduct);

//listing of users
router.get("/list", ListProduct);

//detailing of a user
router.get("/detail/:_id", DetailProduct);

//editing a user route
router.put("/update/:_id", UpdateProduct);




module.exports = router;