const { request, response } = require("express");

//products
let products = [
    { id: 1, description: "prodcut 1", price: 14.25, discount: 1 },
    { id: 2, description: "prodcut 2", price: 14.25, discount: 2 },
    { id: 3, description: "prodcut 3", price: 14.25, discount: 3 },
    { id: 4, description: "prodcut 4", price: 14.25, discount: 4 },
    { id: 5, description: "prodcut 5", price: 14.25, discount: 5 },
    { id: 6, description: "prodcut 6", price: 14.25, discount: 6 }
];

/**
 * Get the list of products
 * @param {*} req
 * @param {*} resp
 */
const ListProducts = (req, resp) => {
  resp.json(products);
};

/**
 * Detail a specific product by id
 * @param {*} req 
 * @param {*} resp 
 */
const DetailProduct = (req, resp) => {
  let item = products.filter((item) => item.id == req.params.id)[0];
  resp.json(item);
};

/**
 * edit a specific product
 * @param {*} req
 * @param {*} resp
 */
const EditProduct = async (req, resp) => {};

//export methods
module.exports = { ListProducts, DetailProduct };
