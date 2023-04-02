import React from "react";

export const ItemAdded = ({ Product }) => {
  return (
    
    <>
    {console.table(Product)}
      <div data-id={Product._id} className="card">
        <div className="image">
          <img
            src={Product.Url}
            alt=""
          />
        </div>

        <div className="details">
          <div className="detail-title">
            <b className="h1">{Product.Name}</b>
            <a href="#"><i className="fa fa-trash-o" aria-hidden="true"></i></a>
          </div>
          <div className="detail-property">Discount: {Product.Discount} %</div>
          <div className="detail-property">Tax: {Product.Tax} %</div>
          <div className="detail-property">Qty: 1 - $ {Product.Price}</div>
          <div className="detail-property">
            <b>$ {Product.Price}</b>
          </div>

          {/* <div className="btn-group">
            <button className="btn-primary rounded-left">-</button>
            <span>1</span>
            <button className="btn-primary rounded-right">+</button>
          </div> */}
        </div>
      </div>
    </>
  );
};
