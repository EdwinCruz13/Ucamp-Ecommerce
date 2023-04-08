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
