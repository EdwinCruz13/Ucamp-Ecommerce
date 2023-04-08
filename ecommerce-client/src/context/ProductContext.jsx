
import { createContext, useState } from "react";

import {
  getProductsRequest,
  getProductsByCategoryRequest,
  getProductsByColorRequest,
  createProductsRequest,
  getProductbyID,
} from "../api/products.api";

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
  const [product, setProduct] = useState({});

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
   * load a product by ID
   * @param {*} _id
   */
  async function LoadProductByID(_id) {
    const response = await getProductbyID(_id);
    const values = response.data;
    //console.log(_id, response);

    //add the list of products as usestate
    setProduct(values.data);
  }

  /**
   * find products by category
   */
  async function LoadProductByCategory(categoryID) {
    if (categoryID) {
      const response = await getProductsByCategoryRequest(categoryID);
      const values = response.data;

      //add the list of products as usestate
      setProducts(values.data);
    }
  }

  async function LoadProductByColor(colorID) {
    if (colorID) {
      const response = await getProductsByColorRequest(colorID);
      const values = response.data;

      //add the list of products as usestate
      setProducts(values.data);
    }
  }

  async function SaveProduct(Product) {
    if (Product) {
      const response = await createProductsRequest(Product);
      const values = await response.data;
      return values;
    }

    else{
      alert("Please, login first");
    }
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        product,
        setProducts,

        LoadProduct,
        LoadProductByID,
        LoadProductByCategory,
        LoadProductByColor,
        SaveProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
