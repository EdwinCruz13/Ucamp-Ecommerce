import axios from "axios";


export const getShoppingCart = async (CustomerID) => {
  try {
    return await axios.get(`http://localhost:5000/api/shoppingcart/list/${CustomerID}`);
  } catch (error) {
    console.log(error);
  }
};

export const getCountFromShoppingCart = async (CustomerID) => {
  try {
    return await axios.get(`http://localhost:5000/api/shoppingcart/countItems/${CustomerID}`);
  } catch (error) {
    console.log(error);
  }
};


/**
 * adding a item to the shopping cart
 */
export const postAddItemRequest = async (shoppingCart) => {
    try {
      return await axios.post("http://localhost:5000/api/shoppingcart/add", shoppingCart, { headers: { "Content-Type": "application/json" }});
    } catch (error) {
        console.log(error);
    }
  };