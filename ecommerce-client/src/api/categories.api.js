import axios from "axios";

/**
 * get the list of categories of products
 * @returns the list the categories of prodcucts
 */
export const getCategoriesRequest = async () => {
  try {
    return await axios.get(
      "http://localhost:5000/api/products/categories/list"
    );
  } catch (error) {}
};
