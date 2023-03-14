import React from "react";

//import the navbar in whole page sections
import { Navbar } from "../../components/Navbar/Navbar";
import { Aside } from "../../components/Aside/Aside";
import { Products } from "../../components/Products/Products";

import "./Warehouse.css";
import "../../components/Article/Article.css";


export const Warehouse = () => {
  return (
    <>
      <section id="container" className="warehouse">
        <Navbar />

        <div id="Warehouse" className="container">
          <Aside ClassName="main-menu" />
          <div className="list-products">
            <Aside ClassName="main-menu2" />
            <Products />
          </div>
        </div>
      </section>
    </>
  );
};
