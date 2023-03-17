import axios from "axios";

/**
 * get the list of categories of products
 * @returns the list the categories of prodcucts
 */
export const getCategoriesRequest = async () => {
  return await axios.get("http://localhost:5000/api/products/categories/list");
};

/**
 * Function that returns the list of products
 * from an api request
 */
export const getProductsRequest = async () => {
  return await axios.get("http://localhost:5000/api/products/list");
};

/**
 * Find a product by category
 * @param {*} CategoryID Send CategoryID in order to find a producy by an specifi ID
 * @returns 
 */
export const getProductsByCategoryRequest = async (CategoryID) => {
  return await axios.get(
    `http://localhost:5000/api/products/ListByCategory/${CategoryID}`
  );
};

/**
 * Function that send a request in order
 * to create a product
 * @param {*} product product to create
 */
export const createProductsRequest = async (product) => {
  await axios.post("http://localhost:5000/api/products/create", product);
};
