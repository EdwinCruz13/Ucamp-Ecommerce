import { React, useContext } from "react";

import { InvoiceContext } from "../../context/InvoiceContext";

export const InvoiceCard = ({ Invoice }) => {
  const { invoice, DetailInvoice } = useContext(InvoiceContext);

  let getDate = Invoice.createdAt;
  let date = new Date(getDate).toLocaleDateString();

  const handleClick = (element) => {
    let InvoiceID = element.currentTarget.getAttribute("data-id");

    //get the selected invoice
    DetailInvoice(InvoiceID);

  };

  return (
    <div className="card" data-id={Invoice._id} onClick={handleClick}>
      <div className="image">
        <img
          src="https://thumbs.dreamstime.com/z/invoice-icon-vector-isolated-white-background-invoice-transparent-sign-invoice-icon-vector-isolated-white-background-invoice-134067056.jpg"
          alt=""
        />
      </div>
      <div className="details">
        <div className="detail-title">
          <b className="h1">Create at {date}</b>
        </div>
        <div className="detail-property">Items ({Invoice.Products.length})</div>
        <div className="detail-property">Tax: {Invoice.Tax} % </div>
        <div className="detail-property">
          <b>$ {Invoice.TotalToPay}</b>
        </div>
      </div>
    </div>
  );
};
