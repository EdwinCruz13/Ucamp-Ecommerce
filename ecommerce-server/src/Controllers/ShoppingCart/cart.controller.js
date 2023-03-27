//adding schema
const { ProductModel } = require("../../Models/Products/product.models");
const cartModels = require("../../Models/ShoppingCart/cart.models");
const { UserModel } = require("../../Models/Users/user.models");

const AddProduct = (req, resp) => {
    try {
        let previousCart;
        const { UserID } = req.body.customer._id;
        const { ProductID } = req.body.product._id;

        
        //find if the user has a shopping cart registered
        const Customer = UserModel.find({UserID})
        previousCart = cartModels.find({Customer: Customer});

        //if there is an user, add an item
        if(previousCart.length > 0){
            //find if there is the item
            const Product = ProductModel.find({ProductID});
            previousCart = cartModels.find({Products: Product});


            if(previousProduct.length > 0){

            }
        }



    } catch (error) {
        let Message = new MessageResponse("There is an error adding the product into the shopping cart: " + error, false, null);
        return resp.status(500).json(Message.GetMessage());
    }
}



module.exports = { AddProduct}