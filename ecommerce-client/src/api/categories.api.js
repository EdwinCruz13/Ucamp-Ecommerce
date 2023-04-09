import axios from "axios";
import env from "react-dotenv";

/**
 * get the list of categories of products
 * @returns the list the categories of prodcucts
 */
export const getCategoriesRequest = async () => {
  try {
    return await axios.get(
      env.URLBASE + "products/categories/list"
    );
  } catch (error) {}
};
