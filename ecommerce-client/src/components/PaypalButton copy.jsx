import React from "react";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

const PPK = "AgbLBwBmRpgjryeIbeQ4Ja7EvDogA0S0Ervko6zDBmmUuxt0k8yNpbrt";

export const PaypalButton = ({value}) => {
  return (
    <PayPalScriptProvider options={{ "client-id": PPK }}>
      <PayPalButtons
        style={{ layout: "horizontal" }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: value,
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
            return actions.order.capture().then((details) => {
                const name =details.payer.name.given_name
                alert(['Transaction completed by ' + name])
            })
        }}
      ></PayPalButtons>
    </PayPalScriptProvider>
  );
};
