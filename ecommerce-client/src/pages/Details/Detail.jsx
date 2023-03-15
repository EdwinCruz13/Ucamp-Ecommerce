import React from "react";
import { Link } from "react-router-dom";

import "./Detail.css";

//Other routes
import { Navbar } from "../../components/Navbar/Navbar";

export const Detailt = () => {
  return (
    <>
      <section className="detail">
        <Navbar />

        <div id="Detail">
          <div className="Product-img">
            <img
              src="https://static.nike.com/a/images/t_PDP_1728_v1/fdcbac72-e321-4fb0-a52f-ab549f69947a/air-jordan-2-retro-low-womens-shoes-PRd1BH.png"
              alt="Ecommerce"
            />

            <div className="product-img-list">
              <div className="img-box">
                <img
                  src="https://static.nike.com/a/images/t_PDP_1728_v1/fdcbac72-e321-4fb0-a52f-ab549f69947a/air-jordan-2-retro-low-womens-shoes-PRd1BH.png"
                  alt=""
                />
              </div>
              <div className="img-box">
                <img
                  src="https://static.nike.com/a/images/t_PDP_1728_v1/d3a80cb6-09db-4974-bc8d-a454709cb0ea/air-jordan-2-retro-low-womens-shoes-PRd1BH.png"
                  alt=""
                />
              </div>
              <div className="img-box">
                <img
                  src="https://static.nike.com/a/images/t_PDP_1728_v1/94e4443c-4caa-4ffd-80e8-37aa2f5f1e28/air-jordan-2-retro-low-womens-shoes-PRd1BH.png"
                  alt=""
                />
              </div>

              <div className="img-box">
                <img
                  src="https://static.nike.com/a/images/t_PDP_1728_v1/81ba18fe-b1ed-489b-8bf6-e6bc57286906/air-jordan-2-retro-low-womens-shoes-PRd1BH.png"
                  alt=""
                />
              </div>

              <div className="img-box">
                <img
                  src="https://static.nike.com/a/images/t_PDP_1728_v1/0c448cc2-539d-47cb-a15e-16dbce223e96/air-jordan-2-retro-low-womens-shoes-PRd1BH.png"
                  alt=""
                />
              </div>

              <div className="img-box">
                <img
                  src="https://static.nike.com/a/images/t_PDP_1728_v1/eebd6480-c425-4984-99a0-4236fcd84091/air-jordan-2-retro-low-womens-shoes-PRd1BH.png"
                  alt=""
                />
              </div>

              <div className="img-box">
                <img
                  src="https://static.nike.com/a/images/t_PDP_1728_v1/6bb84178-9de6-4481-b223-9eb79b52bd9a/air-jordan-2-retro-low-womens-shoes-PRd1BH.png"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="Product-info">
            <section className="product-description">
              <div className="info-header">
                <h3>About this product</h3>
              </div>

              <div className="info-body">
                <div className="info-">
                  <h3 className="info-name">Description Product</h3>
                  <h2 className="info-price">$ 200</h2>
                </div>

                <div className="info-characterist">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </div>
              </div>
            </section>

            <section className="info-opc">
              <div>
                <p>Make every gift special</p>
                <p>For your beloveds.</p>
              </div>
              <div>
                <button className="btn btn-primary" style={{"margin-top": "1.5rem"}}>Add to cart</button>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};
