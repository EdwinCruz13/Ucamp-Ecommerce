import axios from "axios";

/**
 * create the invoice
 * @param {*} cart
 * @returns
 */
export const createInvoiceRequest = async (_id) => {
  try {
    return await axios.post(`http://localhost:5000/api/invoices/create/${_id}`);
  } catch (error) {
    console.log(error);
  }
};


export const listInvoiceRequest = async (CustomerID) => {
  try {
    return await axios.get(`http://localhost:5000/api/invoices/list/${CustomerID}`);
  } catch (error) {
    console.log(error);
  }
};


export const detailInvoiceRequest = async (InvoiceID) => {
  try {
    return await axios.get(`http://localhost:5000/api/invoices/detail/${InvoiceID}`);
  } catch (error) {
    console.log(error);
  }
};

