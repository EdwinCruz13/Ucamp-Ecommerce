import { createContext, useEffect, useState } from "react";
import {
  getShoppingCart,
  getCountFromShoppingCart,
  postAddItemRequest,
} from "../api/shoppingcart.api";

/**
 * create a context
 */
export const ShoppingCartContext = createContext();

export const ShoppingCartContextProvider = ({ children }) => {
  const [shoppingCart, setShoppingCart] = useState({});
  const [cart, setCart] = useState([{}]);
  const [itemsAdded, setItemsAdded] = useState(0);

  useEffect(() => {
    async function Adding() {
      if (shoppingCart.Customer) {
        const response = await postAddItemRequest(shoppingCart);
        const values = response.data;

        alert(values.message);
      }
    }
    Adding();
  }, [shoppingCart]);

  useEffect(() => {
    setItemsAdded(0);
    setCart([{}]);
  }, []);

  async function GetItemmAdded(CustomerID) {
    try {
      const response = await getShoppingCart(CustomerID);
      const values = response.data;

      if (values.data) {
        setCart(values.data.Products);
      } else {
        setCart([{}]);
      }


    } catch (error) {
      setCart([{}]);
    }
  }

  async function GetCountItems(CustomerID) {
    try {
      const response = await getCountFromShoppingCart(CustomerID);
      const values = response.data;

      if (values.data) setItemsAdded(values.data);
      else setItemsAdded(0);
    } catch (error) {
      setItemsAdded(0);
    }
  }

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
      value={{
        shoppingCart,
        setShoppingCart,
        itemsAdded,
        cart,

        GetItemmAdded,
        GetCountItems,
        AddCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
