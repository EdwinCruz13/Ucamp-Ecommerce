import React from "react";

export const ItemAdded = ({ Product }) => {
  return (
    <>
      <div data-id="{Product._id}" className="card">
        <div className="image">
          <img
            src="https://github.com/EdwinCruz13/Ucamp-Restaurant/raw/main/structure/e1.png?raw=true"
            alt=""
          />
        </div>

        <div className="details">
          <div className="detail-title">
            <b className="h1">fdfdf</b>
            <a href="#"><i className="fa fa-trash-o" aria-hidden="true"></i></a>
          </div>
          <div className="detail-property">Category: </div>
          <div className="detail-property">Color: </div>
          <div className="detail-property">Discount: 5%</div>
          <div className="detail-property">Tax: 15%</div>
          <div className="detail-property">Qty: 1 @ $ ""</div>
          <div className="detail-property">
            <b>$185</b>
          </div>

          <div className="btn-group">
            <button className="btn-primary rounded-left">-</button>
            <span>1</span>
            <button className="btn-primary rounded-right">+</button>
          </div>
        </div>
      </div>
    </>
  );
};
