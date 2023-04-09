import React, { useContext, useEffect } from "react";

//other componentes
import { Navbar } from "../../components/Navbar/Navbar";
import { ProductCard } from "../../components/Products/ProductCard";
import { PaypalButton } from "../../components/PaypalButton";

//load context
import { ShoppingCartContext } from "../../context/ShoppingCartContext";


import "./ShoppingCart.css";

export const ShoppingCart = () => {
  const { cart, products, GetItemmAdded } = useContext(ShoppingCartContext);

  useEffect(()=>{
    GetItemmAdded();
  }, [])
  
  
  const Tax = 0.15;
  let Units = products.length;
  let TotalUnit = products.reduce((acumulator, object) => {
    return acumulator + object.Total;
  }, 0).toFixed(2);

  let TotalTax = products.reduce((acumulator, object) => {
    return acumulator + object.Total * Tax;
  }, 0).toFixed(2);


  let Total = (Number(TotalUnit) + Number(TotalTax)).toFixed(2);

  return (
    <section className="cart">
      <Navbar />

      <div id="ShoppingCart" className="container">
        {/* <Aside ClassName="main-menu" /> */}
        <div className="shoppingCart-container">
          <div className="shopping-payment">
            <div className="invoice-ticket ">
              <h3>In your bag</h3>
              <table>
                <tr>
                  <th>Items ({Units}) </th>
                  <td>$ {TotalUnit}</td>
                </tr>
                <tr>
                  <th>Tax (15%)</th>
                  <td>$ {TotalTax}</td>
                </tr>
                <line></line>
                <tr>
                  <th>Total</th>
                  <td>$ {Total}</td>
                </tr>
              </table>
              <PaypalButton value={String(Total)} purchases = { cart } />
            </div>
            <form>
              <div className="shopping-items">
                <h2>Products</h2>
                {products.map((product) => {
                  return <ProductCard key={product._id} Product={product} Remove = { true } />;
                })}
              </div>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
