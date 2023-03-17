import { createContext, useState } from "react";

import { getProductsRequest, getProductsByCategoryRequest} from "../api/products.api";

/**
 * this context will be shared for all
 * the app
 */
export const ProductContext = createContext();

/**
 * provide
 * @param {*} children
 * add the word {childre},
 * yes, {childre} because if you write another word as param
 * it will not work, only with {childre}
 */
export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  /**
   * Find all of products without any param
   */
  async function LoadProduct() {
    const response = await getProductsRequest();
    const values = response.data;

    //add the list of products as usestate
    setProducts(values.data);
  }

 /**
  * find products by category
  */
  async function LoadProductByCategory(categoryID) {
    const response = await getProductsByCategoryRequest(categoryID);
    const values = response.data;

    //add the list of products as usestate
    setProducts(values.data);
  }

  return (
    <ProductContext.Provider value={{ products, setProducts, LoadProduct, LoadProductByCategory }}>
      {children}
    </ProductContext.Provider>
  );
};
