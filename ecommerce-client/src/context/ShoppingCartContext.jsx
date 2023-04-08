
import { createContext, useContext, useEffect, useState } from "react";
import {
  getShoppingCart,
  getCountFromShoppingCart,
  postAddItemRequest,
  postRemoveItemRequest
} from "../api/shoppingcart.api";

import { UserContext } from "../context/UserContext";

/**
 * create a context
 */
export const ShoppingCartContext = createContext();

export const ShoppingCartContextProvider = ({ children }) => {
  const {user, VerifyingToken} = useContext(UserContext)

  const [cart, setCart] = useState([{}]);
  const [products, setproducts] = useState([{}]);
  const [itemsAdded, setItemsAdded] = useState(0);

  useEffect(() => {
    GetItemmAdded()
  }, []);

  

  async function GetItemmAdded() {
    try {
      const response = await getShoppingCart(user._id);
      const values = response.data;

      if (values.data) {
        setCart(values.data);
        setproducts(values.data.Products)
        GetCountItems();
      } else {
        setCart([{}]);
      }


    } catch (error) {
      setCart([{}]);
    }
  }

  async function GetCountItems() {
    try {
      const response = await getCountFromShoppingCart(user._id);
      const values = await (response.data) ? response.data : null; 

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
  async function AddCart(item) {
    try {
      let _cart = { Customer: user, Products: [item] }
      

      const response = await postAddItemRequest(_cart);
      const values = response.data;

      GetItemmAdded();
      alert(values.message); 

      //   return values;
    } catch (error) {
      console.log(error);
    }
  }

  async function RemoveItem(item) {
    try {
      //find the product to remove
      const newItems = await cart.filter((product) => {
          return product._id === item._id
      });

      let _cart = {
        Customer: user,
        Products: newItems
      }

      
      const response = await postRemoveItemRequest(_cart);
      const values = response.data;

      GetItemmAdded();
      alert(values.message)

      //   return values;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        itemsAdded,
        cart,
        products,

        GetItemmAdded,
        GetCountItems,
        AddCart,
        RemoveItem
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
