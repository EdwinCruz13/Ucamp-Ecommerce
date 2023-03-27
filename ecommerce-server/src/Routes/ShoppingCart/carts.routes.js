const { Router } = require("express");
const { AddProduct } = require("../../Controllers/ShoppingCart/cart.controller")

const router = Router();

/* ----------------------------------------------------
  defining routes
----------------------------------------------------*/
//creating products routes
router.post("/add", AddProduct);


//export the router
module.exports = router;