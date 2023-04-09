import axios from "axios";
import env from "react-dotenv";


/**
 * create the invoice
 * @param {*} cart
 * @returns
 */
export const createInvoiceRequest = async (_id) => {
  try {
    return await axios.post(`${env.URLBASE}invoices/create/${_id}`);
  } catch (error) {
    console.log(error);
  }
};


export const listInvoiceRequest = async (CustomerID) => {
  try {
    return await axios.get(`${env.URLBASE}invoices/list/${CustomerID}`);
  } catch (error) {
    console.log(error);
  }
};


export const detailInvoiceRequest = async (InvoiceID) => {
  try {
    return await axios.get(`${env.URLBASE}invoices/detail/${InvoiceID}`);
  } catch (error) {
    console.log(error);
  }
};

