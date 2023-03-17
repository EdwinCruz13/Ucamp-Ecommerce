import React from "react";

import "./Home.css";

//import the navbar in whole page sections
import { Navbar } from "../../components/Navbar/Navbar";

export const Home = () => {
  return (
    <>
      <section id="container">
        <Navbar />

        <div id="Home" className="container">
          <section id="home-header">
            <article>
              <h1 className="title">The Collection</h1>
              <h1 className="title">Of Beauty</h1>
              <h1 className="title">& Uniqueness</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Consectetur nisi dolor, ad recusandae sint ?
              </p>
              <button className="btn btn-primary">
                View Collection{" "}
                <i className="fa fa-chevron-circle-right" aria-hidden="true"></i>
              </button>
            </article>
          </section>
        </div>
      </section>
    </>
  );
};
