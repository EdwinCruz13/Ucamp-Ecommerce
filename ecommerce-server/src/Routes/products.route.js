const { Router } = require("express");
const { ListProducts, DetailProduct } = require("../Controllers/product.controller");



const router = Router();

/* ----------------------------------------------------
  defining routes
----------------------------------------------------*/

//list of products
router.get("/list", ListProducts);

//detail of a product
router.get("/detail/:id", DetailProduct);

/*router.post("/new/:id", (request, response) => {
  response.send("here, creating detail");
});

router.put("/edit/:id", (request, response) => {
  response.send("here, editing detail");
});*/

//export router
module.exports = router;
