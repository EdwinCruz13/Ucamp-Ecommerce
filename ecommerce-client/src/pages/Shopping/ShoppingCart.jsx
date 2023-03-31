import React, { useContext, useEffect } from "react";

//other componentes
import { Navbar } from "../../components/Navbar/Navbar";
import { Aside } from "../../components/Aside/Aside";
import { ItemAdded } from "./ItemAdded";

//load context
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import { UserContext } from "../../context/UserContext";

import "./ShoppingCart.css";

export const ShoppingCart = () => {
  const { cart, GetItemmAdded } = useContext(ShoppingCartContext);
  const { user } = useContext(UserContext);

  useEffect(() => {
    GetItemmAdded(user._id);

    //console.log(items);
  }, []);

  return (
    <section className="cart">
      <Navbar />

      <div id="ShoppingCart" className="container">
        {/* <Aside ClassName="main-menu" /> */}
        <div className="shoppingCart-container">
          <div className="shopping-list">
            
            <div className="shopping-items">
            <h2>Products</h2>
              {cart.map((product) => {
                return <ItemAdded key={product._id} Product={product} />;
              })}
            </div>
          </div>

          <div className="shopping-payment">
            <div className="invoice-ticket">
              <h3>In your bag</h3>
              <table>
                <tr>
                  <th>Items </th>
                  <td>$ </td>
                </tr>
                <tr>
                  <th>Discount </th>
                  <td>$ </td>
                </tr>
                <tr>
                  <th>Tax </th>
                  <td>$ </td>
                </tr>
                <line></line>
                <tr>
                  <th>Total</th>
                  <td>$ </td>
                </tr>
              </table>
            </div>
            <form>
              <div className="inputs-box">
                <div className="form-control-inline">
                  <label htmlFor="FirstName">First Name</label>
                  <input
                    type="text"
                    id="FirstName"
                    name="FirstName"
                    className="form-control"
                    placeholder="Name of Product"
                  />
                </div>

                <div className="form-control-inline">
                  <label htmlFor="LastName">Last Name</label>
                  <input
                    type="text"
                    id="LastName"
                    name="LastName"
                    className="form-control"
                    placeholder="Name of Product"
                  />
                </div>

                <div className="form-control-inline">
                  <label htmlFor="CardNumber">Card Number</label>
                  <input
                    type="text"
                    id="CardNumber"
                    name="CardNumber"
                    className="form-control"
                    placeholder="Card Number"
                  />
                </div>

                <div className="form-control-inline">
                  <div className="code-min">
                    <section>
                      <label htmlFor="ExpirationMonth">Expiration Month</label>
                      <input
                        type="number"
                        id="ExpirateMonth"
                        name="ExpirateMonth"
                        className="form-control"
                        placeholder="MM"
                      />
                    </section>

                    <section>
                      <label htmlFor="ExpirationYear">Expiration Year</label>
                      <input
                        type="number"
                        id="ExpirationYear"
                        name="ExpirationYear"
                        className="form-control"
                        placeholder="yyyy"
                      />
                    </section>

                    <section>
                      <label htmlFor="Code">CV Code</label>
                      <input
                        type="number"
                        id="ExpirationYear"
                        name="Code"
                        className="form-control"
                        placeholder="CVC"
                      />
                    </section>
                  </div>
                </div>
              </div>

              <div className="inputs-box" style={{ marginTop: "1.5rem" }}>
                <button className="btn btn-primary">Complete</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
