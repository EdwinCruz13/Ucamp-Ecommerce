const { Router } = require("express");
const { ListProducts, CountItem,  AddProduct, RemoveProduct } = require("../../Controllers/ShoppingCart/cart.controller")

const router = Router();

/* ----------------------------------------------------
  defining routes
----------------------------------------------------*/
router.get("/countItems/:_id", CountItem);

router.get("/list/:CustomerID", ListProducts);

//creating products routes
router.post("/add", AddProduct);

router.post("/remove", RemoveProduct);


//export the router
module.exports = router;