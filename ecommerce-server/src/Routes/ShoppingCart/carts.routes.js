const { Router } = require("express");
const { ListProducts, CountItem,  AddProduct, RemoveProduct } = require("../../Controllers/ShoppingCart/cart.controller");
const { Auth_Authorization } = require("../../Middleware/auth.middleware");
const { MessageResponse } = require("../../Config/message_code");

const router = Router();

/* ----------------------------------------------------
  defining routes
----------------------------------------------------*/
router.get("/countItems/:_id", CountItem);

router.get("/list/:CustomerID", Auth_Authorization, ListProducts);

//creating products routes
router.post("/add", Auth_Authorization, AddProduct);

router.post("/remove", Auth_Authorization, RemoveProduct);


//export the router
module.exports = router;