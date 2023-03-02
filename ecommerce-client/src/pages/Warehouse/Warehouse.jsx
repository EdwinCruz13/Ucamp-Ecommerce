import React from "react";

//import the navbar in whole page sections
import { Navbar } from "../../components/Navbar/Navbar";

import "./Warehouse.css";
import "../../components/Article/Article.css";

export const Warehouse = () => {
  return (
    <>
      <section id="container" className="warehouse">
        <Navbar />

        <div id="Warehouse" className="container">
          <aside class="main-menu">
            <ul className="list">
              <h3>Type</h3>
              <li>
                <a href="#">
                  <span class="nav-text">Shoes</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="nav-text">Jordan</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="nav-text">Clothing</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="nav-text">Hoodies & Pullovers</span>
                </a>
              </li>

              <li>
                <a href="#">
                  <span class="nav-text">Shorts</span>
                </a>
              </li>

              <li>
                <a href="#">
                  <span class="nav-text">Tops & T-Shirts</span>
                </a>
              </li>

              <li>
                <a href="#">
                  <span class="nav-text">Pants & Tights</span>
                </a>
              </li>

              <li>
                <a href="#">
                  <span class="nav-text">Jackets & Vests</span>
                </a>
              </li>

              <li>
                <a href="#">
                  <span class="nav-text">Accesories & Equipments</span>
                </a>
              </li>

              <li>
                <a href="#">
                  <span class="nav-text">Socks</span>
                </a>
              </li>
            </ul>
            <hr />
            <ul className="list">
              <h3>By Sex</h3>
              <li>
                <a href="#">
                  <span class="nav-text">Men</span>
                </a>
              </li>

              <li>
                <a href="#">
                  <span class="nav-text">Women</span>
                </a>
              </li>

              <li>
                <a href="#">
                  <span class="nav-text">Unisex</span>
                </a>
              </li>
            </ul>

            <hr />
            <ul className="list">
              <h3>By Age</h3>
              <li>
                <a href="#">
                  <span class="nav-text">Kids</span>
                </a>
              </li>

              <li>
                <a href="#">
                  <span class="nav-text">Teenagers</span>
                </a>
              </li>

              <li>
                <a href="#">
                  <span class="nav-text">Adults</span>
                </a>
              </li>
            </ul>
          </aside>

          <div className="list-products">
            <aside class="main-menu2">
              <ul className="list">
                <li>
                  <a href="#">Shoes</a>
                </li>

                <li>
                  <a href="#">Jordan</a>
                </li>
                <li>
                  <a href="#">Clothing</a>
                </li>
                <li>
                  <a href="#">Hoodies & Pullovers</a>
                </li>

                <li>
                  <a href="#">Shorts</a>
                </li>

                <li>
                  <a href="#">Tops & T-Shirts</a>
                </li>

                <li>
                  <a href="#">Pants & Tights</a>
                </li>

                <li>
                  <a href="#">Jackets & Vests</a>
                </li>

                <li>
                  <a href="#">Accesories & Equipments</a>
                </li>

                <li>
                  <a href="#">Socks</a>
                </li>

                <li>
                  <a href="#">Men</a>
                </li>

                <li>
                  <a href="#">Women</a>
                </li>

                <li>
                  <a href="#">Unisex</a>
                </li>

                <li>
                  <a href="#">Kids</a>
                </li>

                <li>
                  <a href="#">Teenagers</a>
                </li>

                <li>
                  <a href="#">Adults</a>
                </li>
              </ul>
            </aside>

            <div className="products">
              <section className="search"> 45 Type items founds</section>

              <section className="items">
                <article className="item">
                  <div className="img-container">
                    <img
                      src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a6d9d750-a845-49c6-b130-1936a895877f/dunk-high-retro-premium-mens-shoes-93rG1k.png"
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
          </div>
        </div>
      </section>
    </>
  );
};
