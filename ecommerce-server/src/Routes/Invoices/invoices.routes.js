const { Router } = require("express");
const { Create, List, Detail } = require("../../Controllers/Invoices/invoice.controller")


const router = Router();

/* ----------------------------------------------------
  defining routes
----------------------------------------------------*/
router.post("/create/:_id", Create);

router.get("/list/:CustomerID", List);

router.get("/detail/:_id", Detail);


//export the router
module.exports = router;