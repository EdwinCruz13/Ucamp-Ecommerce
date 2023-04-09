import axios from "axios";
import env from "react-dotenv";


export const getShoppingCart = async (CustomerID) => {
  try {
    return await axios.get(
      `${env.URLBASE}shoppingcart/list/${CustomerID}`
    );
  } catch (error) {
    console.log(error);
  }
};

export const getCountFromShoppingCart = async (CustomerID) => {
  try {
    return await axios.get(
      `${env.URLBASE}shoppingcart/countItems/${CustomerID}`
    );
  } catch (error) {
    console.log(error);
  }
};

/**
 * adding a item to the shopping cart
 */
export const postAddItemRequest = async (shoppingCart) => {
  try {
    return await axios.post(
      env.URLBASE + "shoppingcart/add",
      shoppingCart,
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.log(error);
  }
};

export const postRemoveItemRequest = async (shoppingCart) => {
  try {
    return await axios.post(
      env.URLBASE + "shoppingcart/remove",
      shoppingCart,
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.log(error);
  }
};
