import axios from "axios";

/**
 * get the list of categories of products
 * @returns the list the categories of prodcucts
 */
export const getColorsRequest = async () => {
  try {
    return await axios.get(
      "http://localhost:5000/api/products/colors/list"
    );
  } catch (error) {}
};
