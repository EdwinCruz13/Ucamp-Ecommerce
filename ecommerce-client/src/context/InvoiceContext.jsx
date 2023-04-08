import { createContext } from "react";

import { createInvoiceRequest } from "../api/invoices.api";


export const InvoiceContext = createContext();

/**
 * 
 * @param {*} param0 
 * @returns 
 */
export const InvoiceContextProvider = ({ children }) => {

    /**
     * Create an invoice and empty the ShoppingCart
     * @param {} _cardID 
     */
    async function CreateInvoice(_cardID)
    {
        try {
            const response = await createInvoiceRequest(_cardID);
            const values = await response.data;

            return values.data;
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <InvoiceContext.Provider
          value={{ CreateInvoice }}
        >
          {children}
        </InvoiceContext.Provider>
      );
}