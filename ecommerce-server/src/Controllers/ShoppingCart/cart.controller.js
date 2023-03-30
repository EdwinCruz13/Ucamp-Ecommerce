const { MessageResponse } = require("../../Config/message_code");

//adding schema
const { CartModel } = require("../../Models/ShoppingCart/cart.models");
const { ProductModel } = require("../../Models/Products/product.models");
const { UserModel } = require("../../Models/Users/user.models");

/**
 * List of all the products added in the shopping cart
 * @param {*} req 
 * @param {*} resp 
 * @returns 
 */
const ListProducts = async(req, resp) =>
{
  try {
    const { CustomerID } = req.params ;
    let cart = {};
    

    //load the products throught the customerID
    let result = await (await CartModel.find()).filter((cart) => { return cart.Customer._id === CustomerID})
    

    //check if there is any item
    if(result.length > 0){
      cart = result[0];
    }

    else {
      cart = null;
    }


    let Message = new MessageResponse("Items found.", true, cart);
    return resp.status(200).json(Message.GetMessage());

  } catch (error) {
    let Message = new MessageResponse("There is an error listing the product from the shopping cart: " + error, false, null);
    return resp.status(500).json(Message.GetMessage());
  }
}


/**
 * method that allows to load the items from the shopping cart
 * @param {*} req 
 * @param {*} resp 
 * @returns 
 */
const CountItem = async(req, resp) =>
{
  try {
    const { _id } = req.params ;
    let count = 0;

    //load the products throught the customerID
    let result = await (await CartModel.find()).filter((cart) => { return cart.Customer._id === _id})


    //check if there is any item
    if(result.length > 0){
      let cart = result[0];
      if(cart.Products){
        count = cart.Products.length;
      }

      else {
        count = 0;
      }


    }

    else {
      count = 0;
    }


    let Message = new MessageResponse("Items found.", true, count);
    return resp.status(200).json(Message.GetMessage());

  } catch (error) {
    let Message = new MessageResponse("There is an error listing the product from the shopping cart: " + error, false, null);
    return resp.status(500).json(Message.GetMessage());
  }
}


/**
 * allow to add a new product
 * in case there is not a previous cart, create one,
 * if there is a registered cart then add the product into the shooping cart
 * @param {*} req
 * @param {*} resp
 * @returns
 */
const AddProduct = async (req, resp) => {
  try {
    let previousCart;
    const { Customer, Products } = req.body;

    //find if the user has a shopping cart registered
    let result = await (await CartModel.find()).filter((cart) => { return cart.Customer._id === Customer._id})
    

    //if there is an user, add an item
    if (result.length > 0) {
      previousCart = result[0];

      //find if there is the item from the cart
      const hasAllElems = previousCart.Products.filter((product) => {
        return Products.some((element) => {
          return element._id === product._id;
        });
      });

      //if there is not products in the customer cart, add a new product into the shopping cart
      if (hasAllElems.length == 0) {
        await previousCart.Products.push(Products[0]);
        await previousCart.save();
      }

      //if there is a item in the shopping cart will not be neccessary add a new one
      if (hasAllElems.length > 0) {
        let Message = new MessageResponse(
          "the product item is already registered",
          false,
          null
        );
        return resp.status(200).json(Message.GetMessage());
      }
    } else {
      //find the user properties

      //const findProducts = (await ProductModel.find()).filter((product) => { return Products.some((element) => {element._id === product._id }    )});
      const newCart = await CartModel({
        Customer: {
          _id: Customer._id,
          Username: Customer.Username,
          Email: Customer.Email,
        },
        Products: Products,
      });
      //save the cart
      await newCart.save();
    }

    let Message = new MessageResponse(
      "The product has been added in the shopping cart.",
      true,
      null
    );
    return resp.status(201).json(Message.GetMessage());
  } catch (error) {
    console.log(error);
    let Message = new MessageResponse(
      "There is an error adding the product into the shopping cart: " + error,
      false,
      null
    );
    return resp.status(500).json(Message.GetMessage());
  }
};

/**
 * function that allows to remove items from shopping cart
 * @param {*} req
 * @param {*} resp
 * @returns
 */
const RemoveProduct = async (req, resp) => {
  try {
    let previousCart;
    const { Customer, Products } = req.body;

    previousCart = await CartModel.findOne({ Customer: Customer });

    if (previousCart) {
      //find if there is the item from the cart in order to remove
      const hasAllElems = await previousCart.Products.filter((product) => {
        return Products.some((element) => {
          return element._id === product._id;
        });
      });

      if (hasAllElems.length > 0) {
        //item to remove
        const toKeep = await previousCart.Products.filter((product) => {
          return Products.some((element) => {
            return element._id !== product._id;
          });
        });

        //save the product
        previousCart.Products = toKeep;
        await previousCart.save();

        //send the result
        let Message = new MessageResponse(
          "The product has been removed from shopping cart.",
          true,
          null
        );
        return resp.status(200).json(Message.GetMessage());
      } else {
        //send the message
        let Message = new MessageResponse(
          "There are not products to remove",
          false,
          null
        );
        return resp.status(200).json(Message.GetMessage());
      }
    } else {
      let Message = new MessageResponse(
        "There are not customers to remove",
        false,
        null
      );
      return resp.status(200).json(Message.GetMessage());
    }
  } catch (error) {
    let Message = new MessageResponse(
      "There is an error removing the product into the shopping cart: " + error,
      false,
      null
    );
    return resp.status(500).json(Message.GetMessage());
  }
};

module.exports = { ListProducts, CountItem, AddProduct, RemoveProduct };
