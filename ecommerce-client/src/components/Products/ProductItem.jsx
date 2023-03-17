import React from "react";
import { Link } from "react-router-dom";

export const ProductItem = ({Product}) => {

  return (
    <article className="item">
      <div className="img-container">
        <img
          src="https://static.nike.com/a/images/t_PDP_1728_v1/fdcbac72-e321-4fb0-a52f-ab549f69947a/air-jordan-2-retro-low-womens-shoes-PRd1BH.png"
          alt="Ecommerce"
        />
        <div className="control-purchases control">
          <div className="control-opc">
            <Link to="/detail">
              <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
            </Link>

            <a href="#">
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
        <h3 className="price-item">{Product.Price.toFixed(2)}</h3>
      </div>
    </article>
  );
};
