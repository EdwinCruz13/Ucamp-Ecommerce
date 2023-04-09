//others settings
const { MessageResponse } = require('../../Config/message_code')

//import models
const { InvoiceModel } = require('../../Models/Invoices/invoice.models')
const { CartModel } = require('../../Models/ShoppingCart/cart.models')
const { UserModel } = require('../../Models/Users/user.models')

/**
 * create a new invoice for customer
 * @param {*} req
 * @param {*} resp
 * @returns
 */
const Create = async (req, resp) => {
  try {
    //get the params
    const { _id } = req.params
    const tax = 15

    

    //get the last shopping cart saved by user
    const Cart = await CartModel.findById({ _id })

    

    if (Cart) {
      //find user
      const Customer = await UserModel.findById({ _id: Cart.Customer._id })

      //find if there products
      if (Cart.Products.length > 0) {
        //sum all the total
        let SumTotal = Cart.Products.reduce((acumulator, object) => {
          return acumulator + object.Total
        }, 0)

        //get the total to pay
        let TotalToPay = SumTotal + SumTotal * (tax / 100)

        /////////////////////////////////////////////
        //adding the data into the model
        /////////////////////////////////////////////
        const newInvoice = await InvoiceModel({
          Customer: { _id: Customer._id, Email: Customer.Email, Username: Customer.Username },
          Tax: tax,
          Products: Cart.Products,
          Cart: Cart,
          TotalToPay: TotalToPay,
        })

        //save invoice
        await newInvoice.save()

        //empty the cart 
        await CartModel.findOneAndDelete({_id: Cart._id})


      } else {
        let Message = new MessageResponse('There are not products in the shopping cart', false, null)
        //send information in json format
        return resp.status(201).json(Message.GetMessage())
      }
    } else {
      let Message = new MessageResponse('There is not a shopping cart', false, null)
      //send information in json format
      return resp.status(201).json(Message.GetMessage())
    }

    //preparing the object to send
    let Message = new MessageResponse('A invoice has been created', true, null)
    //send information in json format
    return resp.status(201).json(Message.GetMessage())
  } catch (error) {
    let Message = new MessageResponse('There is an error creating a product: ' + error, false, null)
    return resp.status(500).json(Message.GetMessage())
  }
}

const List = async (req, resp) => {
  try {
    //preparing the object to send
    let Message = new MessageResponse('A invoice has been created', true, null)
    //send information in json format
    return resp.status(201).json(Message.GetMessage())
  } catch (error) {
    let Message = new MessageResponse('There is an error creating a product: ' + error, false, null)
    return resp.status(500).json(Message.GetMessage())
  }
}

module.exports = { Create, List }