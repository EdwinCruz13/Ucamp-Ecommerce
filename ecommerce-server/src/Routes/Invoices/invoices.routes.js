const { Router } = require("express");
const { Create } = require("../../Controllers/Invoices/invoice.controller")


const router = Router();

/* ----------------------------------------------------
  defining routes
----------------------------------------------------*/
router.post("/create/:_id", Create);


//export the router
module.exports = router;