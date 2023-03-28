const { Router } = require("express");
const { AddProduct, RemoveProduct } = require("../../Controllers/ShoppingCart/cart.controller")

const router = Router();

/* ----------------------------------------------------
  defining routes
----------------------------------------------------*/
//creating products routes
router.post("/add", AddProduct);

router.post("/remove", RemoveProduct);


//export the router
module.exports = router;