import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        

        <div className="brand">
          <a href="#" className="navbar-collapse-menu">
            <i class="fa fa-list" aria-hidden="true">
              {" "}
            </i>
            Close One
          </a>

          <div className="navbar-collapse">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Warehouse">Collection</Link>
              </li>
              <li>
                <Link to="/Contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="user-section">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Warehouse">Collection</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>

            <li>
              <Link to="/ShoppingCart">
                <i class="fa fa-shopping-cart" aria-hidden="true">
                  {" "}
                  0
                </i>
              </Link>
            </li>
          </ul>

          <div className="btn-group">
            <button className="btn btn-primary">Sign In</button>
            <button className="btn">Sign In</button>
          </div>
        </div>
      </nav>

      <ul className="navbar-tablet">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Warehouse">Collection</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>

        <li>
          <Link to="/ShoppingCart">
            <i class="fa fa-shopping-cart" aria-hidden="true">
              {" "}
              0
            </i>
          </Link>
        </li>
      </ul>
    </>
  );
};
