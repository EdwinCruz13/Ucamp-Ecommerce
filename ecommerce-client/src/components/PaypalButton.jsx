import { React, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

import { InvoiceContext } from "../context/InvoiceContext";

const PPK = "ASqu1MI7_XkJ5LE9uXaD8G65eQek_WOsph3F_FmdxkE4gh9U6iBQA92ev5REt9boJeOXMWXI76kYQ1vS";

export const PaypalButton = ({ value, purchases }) => {
  const navigate = useNavigate();
  const { CreateInvoice } = useContext(InvoiceContext);

  async function createInvoice() {
    //now we have to enter the purchase
    const response = await CreateInvoice(purchases._id);
  }

  useEffect(()=>{
    // console.log(value, purchases)
  }, [])

  return (
    <PayPalScriptProvider options={{ "client-id": PPK }}>
      <PayPalButtons
        style={{ layout: "horizontal" }}
        createOrder={(data, actions) => {

          console.log(String(value))

          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: String(value),
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
            const name = details.payer.name.given_name;

            try {
              createInvoice();
              alert("Transaction completed by " + name);
              navigate(0);
            } catch (error) {}
          });
        }}
      ></PayPalButtons>
    </PayPalScriptProvider>
  );
};
