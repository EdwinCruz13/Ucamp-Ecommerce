//import express funcionality
const { Router } = require("express");

const { CreateColor, ListColor, DetailColor, UpdateColor } = require("../../Controllers/Products/product.color.controller");

//declare a router
const router = Router();

//defining news subpath routes
router.post("/create", CreateColor);

router.get("/list", ListColor);

router.get("/detail/:_id", DetailColor);

router.put("/update/:_id", UpdateColor);

//export the router
module.exports = router;