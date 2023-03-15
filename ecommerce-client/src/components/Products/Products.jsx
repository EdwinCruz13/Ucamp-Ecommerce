import React from "react";
import { Link } from "react-router-dom";

import "./Products.css";

/**
 * Component products
 * that return the list of products
 * @returns
 */
export const Products = () => {
  return (
    <div className="products">
      <section className="search"> 45 Type items founds</section>

      <section className="items">
        <article className="item">
          <div className="img-container">
            <img
              src="https://static.nike.com/a/images/t_PDP_1728_v1/fdcbac72-e321-4fb0-a52f-ab549f69947a/air-jordan-2-retro-low-womens-shoes-PRd1BH.png"
              alt="Ecommerce"
            />
            <div className="control-purchases control">
              <div className="control-opc">
                <Link to="/detail">
                  <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
                </Link>
               
                <a href="#">
                  <i class="fa fa-shopping-cart" aria-hidden="true" />
                </a>
                <a href="#">
                  <i class="fa fa-heart" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="info-item">
            <h3 className="name-item">Air Jordan 6 Retro</h3>
            <h3 className="type-item">Shoes</h3>
            <h3 className="price-item">$ 200</h3>
          </div>
        </article>

        <article className="item">
          <div className="img-container">
            <img
              src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/421160a3-e273-426b-9c13-9c7df2aca8de/invincible-3-womens-road-running-shoes-kC40R9.png"
              alt="Ecommerce"
            />
            <div className="control-purchases">
              <div className="control-opc">
                <a href="#">
                  <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i class="fa fa-shopping-cart" aria-hidden="true" />
                </a>
                <a href="#">
                  <i class="fa fa-heart" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="info-item">
            <h3 className="name-item">Air Jordan 6 Retro</h3>
            <h3 className="type-item">Shoes</h3>
            <h3 className="price-item">$ 200</h3>
          </div>
        </article>

        <article className="item">
          <div className="img-container">
            <img
              src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4a0ea8e4-d463-4a83-842c-02e22c9058f5/air-max-90-g-nrg-golf-shoes-VWRDMj.png"
              alt="Ecommerce"
            />
            <div className="control-purchases">
              <div className="control-opc">
                <a href="#">
                  <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i class="fa fa-shopping-cart" aria-hidden="true" />
                </a>
                <a href="#">
                  <i class="fa fa-heart" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="info-item">
            <h3 className="name-item">Air Jordan 6 Retro</h3>
            <h3 className="type-item">Shoes</h3>
            <h3 className="price-item">$ 200</h3>
          </div>
        </article>

        <article className="item">
          <div className="img-container">
            <img
              src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f6592635-0882-4a7b-aa17-fb5aedc42288/air-jordan-1-elevate-high-womens-shoes-0Fw6bf.png"
              alt="Ecommerce"
            />
            <div className="control-purchases">
              <div className="control-opc">
                <a href="#">
                  <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i class="fa fa-shopping-cart" aria-hidden="true" />
                </a>
                <a href="#">
                  <i class="fa fa-heart" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="info-item">
            <h3 className="name-item">Air Jordan 6 Retro</h3>
            <h3 className="type-item">Shoes</h3>
            <h3 className="price-item">$ 200</h3>
          </div>
        </article>

        <article className="item">
          <div className="img-container">
            <img
              src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e17c799d-0bdf-4dcf-9191-26b02906bf4f/air-zoom-gt-cut-2-basketball-shoes-tmfmFl.png"
              alt="Ecommerce"
            />
            <div className="control-purchases">
              <div className="control-opc">
                <a href="#">
                  <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i class="fa fa-shopping-cart" aria-hidden="true" />
                </a>
                <a href="#">
                  <i class="fa fa-heart" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="info-item">
            <h3 className="name-item">Air Jordan 6 Retro</h3>
            <h3 className="type-item">Shoes</h3>
            <h3 className="price-item">$ 200</h3>
          </div>
        </article>

        <article className="item">
          <div className="img-container">
            <img
              src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b56167d3-98f7-41cd-9c43-17c475b8f032/air-jordan-5-retro-se-mens-shoes.png"
              alt="Ecommerce"
            />
            <div className="control-purchases">
              <div className="control-opc">
                <a href="#">
                  <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i class="fa fa-shopping-cart" aria-hidden="true" />
                </a>
                <a href="#">
                  <i class="fa fa-heart" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="info-item">
            <h3 className="name-item">Air Jordan 6 Retro</h3>
            <h3 className="type-item">Shoes</h3>
            <h3 className="price-item">$ 200</h3>
          </div>
        </article>

        <article className="item">
          <div className="img-container">
            <img
              src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6de4b02f-718c-46cf-a548-da944cf3e836/gripknit-phantom-gx-elite-fg-firm-ground-soccer-cleats-WGRzk4.png"
              alt="Ecommerce"
            />
            <div className="control-purchases">
              <div className="control-opc">
                <a href="#">
                  <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i class="fa fa-shopping-cart" aria-hidden="true" />
                </a>
                <a href="#">
                  <i class="fa fa-heart" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="info-item">
            <h3 className="name-item">Air Jordan 6 Retro</h3>
            <h3 className="type-item">Shoes</h3>
            <h3 className="price-item">$ 200</h3>
          </div>
        </article>

        <article className="item">
          <div className="img-container">
            <img
              src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/8bbf75fe-4463-4eb2-9270-a817503fad1a/custom-nike-air-force-1-low-by-you.png"
              alt="Ecommerce"
            />
            <div className="control-purchases">
              <div className="control-opc">
                <a href="#">
                  <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i class="fa fa-shopping-cart" aria-hidden="true" />
                </a>
                <a href="#">
                  <i class="fa fa-heart" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="info-item">
            <h3 className="name-item">Air Jordan 6 Retro</h3>
            <h3 className="type-item">Shoes</h3>
            <h3 className="price-item">$ 200</h3>
          </div>
        </article>
      </section>
    </div>
  );
};
