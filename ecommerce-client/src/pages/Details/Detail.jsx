import React, { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import "./Detail.css";

//use Product and user Context
import { ProductContext } from "../../context/ProductContext";
import { UserContext } from "../../context/UserContext";

//Other routes
import { Navbar } from "../../components/Navbar/Navbar";

export const Detailt = () => {
  let params = useParams();

  
  const { product, LoadProductByID } = useContext(ProductContext);
  const { user, authStatus, VerifyingToken } = useContext(UserContext);

  useEffect(() => {
    async function LoadbyID() {
      await LoadProductByID(params.id);
    }

    LoadbyID();
  }, []);

  return (
    <>
      <section className="detail">
        <Navbar />

        <div id="Detail">
          <div className="Product-img">
            <img src={product.Url} alt="Ecommerce" />

            <div className="product-img-list">
              <div className="img-box">
                <img src={product.Url} alt="" />
              </div>
            </div>
          </div>

          <div className="Product-info">
            <section className="product-description">
              <div className="info-header">
                <h5>About this product</h5>
                <span>
                  <Link>
                    <i className="fa fa-pencil" aria-hidden="true"></i>
                  </Link>
                </span>
              </div>

              <div className="info-body">
                <div className="info-">
                  <h3 className="info-name">{product.Name}</h3>
                  <h2 className="info-price">$ {product.Price}</h2>
                </div>

                <div className="info-characterist">{product.Description}.</div>
              </div>
            </section>

            <section className="info-opc">
              <div>
                <p>Make every gift special</p>
                <p>For your beloveds.</p>
              </div>
              <div>
                <button
                  className="btn btn-primary"
                  style={{ marginTop: "1.5rem" }}
                >
                  Add to cart
                </button>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};
