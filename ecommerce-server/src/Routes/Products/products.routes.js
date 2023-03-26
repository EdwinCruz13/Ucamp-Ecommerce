const { Router } = require("express");
const { CreateProduct, ListProduct, ListByCategory, ListByColor, DetailProduct, UpdateProduct } = require("../../Controllers/Products/product.controller");



const router = Router();
/* ----------------------------------------------------
  defining routes
----------------------------------------------------*/
//creating products routes
router.post("/create", CreateProduct);

//listing of products
router.get("/list", ListProduct);

//get list of products by Category
router.get("/ListByCategory/:_id", ListByCategory);

router.get("/ListByColor/:_id", ListByColor);

//detailing of a products
router.get("/detail/:_id", DetailProduct);

//editing a products route
router.put("/update/:_id", UpdateProduct);




module.exports = router;