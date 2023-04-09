import React from "react";
import { useContext, useEffect } from "react";

//import the navbar in whole page sections
import { Navbar } from "../../components/Navbar/Navbar";
import { Aside } from "../../components/Aside/Aside";
import { Products } from "../../components/Products/Products";

import { UserContext } from "../../context/UserContext";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";

import "./Warehouse.css";
import "../../components/Article/Article.css";



export const Warehouse = () => {
  const { VerifyingToken } = useContext(UserContext);
  const { GetItemmAdded } = useContext(ShoppingCartContext);

  useEffect(() => {
    async function init(){
      await VerifyingToken(true); 
      await GetItemmAdded();
    }

    init(); 
  }, []); 
  
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
