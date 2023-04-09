import React, { useContext, useEffect } from "react";

import { Navbar } from "../../components/Navbar/Navbar";
import { ProductCard } from "../../components/Products/ProductCard";
import { InvoiceCard } from "../../components/Products/InvoiceCard";

import { InvoiceContext } from "../../context/InvoiceContext";
import { UserContext } from "../../context/UserContext";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";

import "./Invoices.css";

export const Invoices = () => {
  const { invoices, invoice, ListInvoices } =
    useContext(InvoiceContext);
  const { VerifyingToken } = useContext(UserContext);
  const { GetItemmAdded } = useContext(ShoppingCartContext);

  useEffect(() => {
    ListInvoices();
  }, []);

  useEffect(() => {
    async function init() {
      await VerifyingToken();
      await GetItemmAdded();
      await ListInvoices()
    }

    init();
  }, []);

  return (
    <section className="cart">
      <Navbar />
      <div id="ShoppingCart" className="container">
        <div className="shoppingCart-container">
          <div className="shopping-payment">
            <div className="invoice-ticket ">
              <h3>Your Purchases</h3>
              <div className="invoice-list">
                {invoices &&
                  invoices.map((item) => {
                    return <InvoiceCard key={item._id} Invoice={item} />;
                  })}
              </div>
            </div>
            <form>
              <div className="shopping-items">
                <h2>Products</h2>

                {invoice &&
                  invoice[0] &&
                  invoice[0].Products &&
                  invoice[0].Products.map((product) => {
                    return (
                      <ProductCard
                        key={product._id}
                        Product={product}
                        Remove={false}
                      />
                    );
                  })}

                {/* {invoice[0].Products && 
                  invoice[0].Products.map((product) => {
                    return <ProductCard key={product._id} Product={product} />;
                  })} */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
