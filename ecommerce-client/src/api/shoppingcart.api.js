import axios from "axios";

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