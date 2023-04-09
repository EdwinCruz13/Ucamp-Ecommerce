import { createContext, useContext, useEffect, useState } from "react";

//import api
import { createInvoiceRequest, listInvoiceRequest, detailInvoiceRequest } from "../api/invoices.api";


//import context
import { UserContext } from "./UserContext";




export const InvoiceContext = createContext();

/**
 * 
 * @param {*} param0 
 * @returns 
 */
export const InvoiceContextProvider = ({ children }) => {

    const { user } = useContext(UserContext);
    const [invoices , setInvoices] = useState(null);
    const [invoice , setInvoice] = useState({})


    // useEffect(() => {
    //     async function init(){
    //        await ListInvoices()
    //     }

    //     init();
        
          
    // }, [])


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


    /**
     * list all the customer's invoices
     */
    async function ListInvoices()
    {
      
        try {
            const response = await listInvoiceRequest(user._id);
            const values = await response.data;

            setInvoices(values.data);
            
            

        } catch (error) {
            console.log(error);
        }
    }
     
    /**
     * get data from customer's invoice
     * @param {*} InvoiceID 
     */
    async function DetailInvoice(InvoiceID)
    {
        try {
            const response = await detailInvoiceRequest(InvoiceID);
            const values = await response.data;

            setInvoice(values.data);
            
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <InvoiceContext.Provider
          value={{invoices,  invoice, setInvoice,  CreateInvoice, ListInvoices, DetailInvoice }}
        >
          {children}
        </InvoiceContext.Provider>
      );
}