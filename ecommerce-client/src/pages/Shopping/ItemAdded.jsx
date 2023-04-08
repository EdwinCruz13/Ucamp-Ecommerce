import {React, useContext} from "react";

import {ShoppingCartContext} from "../../context/ShoppingCartContext"


export const ItemAdded = ({ Product }) => {
  const { RemoveItem } = useContext(ShoppingCartContext)

  return (
    <>
      <div data-id={Product._id} className="card">
        <div className="image">
          <img src={Product.Url} alt="" />
        </div>

        <div className="details">
          <div className="detail-title">
            <b className="h1">{Product.Name}</b>
            <a href="#" onClick={ () => RemoveItem(Product) }>
              <i className="fa fa-trash-o" aria-hidden="true"></i>
            </a>
          </div>
          <div className="detail-property">Discount: {Product.Discount} %</div>
          <div className="detail-property">
            Qty: 1 -{" "}
            {Product.Discount > 0 ? (
              <>
                <s>${Product.Price}</s> <b>${Product.Total}</b>
              </>
            ) : (
              <b>${Product.Total}</b>
            )}{" "}
          </div>
          <div className="detail-property">
            <b>$ {Product.Total}</b>
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
