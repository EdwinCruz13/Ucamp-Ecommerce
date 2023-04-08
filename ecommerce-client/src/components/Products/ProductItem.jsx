import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

const { ShoppingCartContext } = require("../../context/ShoppingCartContext");
const { UserContext } = require("../../context/UserContext");

export const ProductItem = ({ Product }) => {
  const { AddCart } = useContext(ShoppingCartContext);
  const { user } = useContext(UserContext);

  let strLink = `/detail/${Product._id}`;

  return (
    <article className="item">
      <div className="img-container">
        <img src={Product.Url} alt="Ecommerce" />
        <div className="control-purchases control">
          <div className="control-opc">
            <Link to={strLink} relative="path">
              <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
            </Link>

            <a href="#" onClick={(e) => AddCart(Product)}>
              <i className="fa fa-shopping-cart" aria-hidden="true" />
            </a>
            <a href="#">
              <i className="fa fa-heart" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="info-item">
        <h3 className="name-item">{Product.Name}</h3>
        <h3 className="type-item">{Product.Category.Description}</h3>
        { Product.Discount ? <h3 className="type-item">Discount {Product.Discount} %</h3> : ''}
        <h3 className="price-item">
          {Product.Discount > 0 ? (
            <>
              <s>${Product.Price}</s> <b>$ {(Product.Price - (Product.Price * (Product.Discount / 100))).toFixed(2)}</b>
            </>
          ) : (
            <b>${Product.Price}</b>
          )}{" "}
        </h3>
      </div>
    </article>
  );
};
