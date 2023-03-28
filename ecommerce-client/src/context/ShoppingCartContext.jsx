import { createContext, useEffect, useState } from "react";
import { postAddItemRequest } from "../api/shoppingcart.api";

/**
 * create a context
 */
export const ShoppingCartContext = createContext();

export const ShoppingCartContextProvider = ({ children }) => {
  const [shoppingCart, setShoppingCart] = useState({});

  useEffect(() => {
    async function Adding(){
        const response = await postAddItemRequest(shoppingCart);
        const values = response.data;

        alert(values.message);
    }

    Adding();
    
  }, [shoppingCart]);

  /**
   * method that allow to add a product
   * @param {*} _customer
   * @param {*} _products
   */
  async function AddCart(_customer, _products) {
    try {
      await setShoppingCart(() => ({
        Customer: _customer,
        Products: [_products],
      }));

      //   return values;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ShoppingCartContext.Provider
      value={{ shoppingCart, setShoppingCart, AddCart }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
