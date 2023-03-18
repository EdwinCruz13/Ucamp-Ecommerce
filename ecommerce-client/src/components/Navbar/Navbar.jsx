import { React, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

//import userContext
import { UserContext } from "../../context/UserContext";

import "./Navbar.css";

export const Navbar = () => {
  //get the user context saved
  const { user } = useContext(UserContext);

  //check for any changes on the useState "user"
  useEffect(() => {}, []);

  return (
    <>
      <nav className="navbar">
        <div className="brand">
          <a href="#" className="navbar-collapse-menu">
            <i className="fa fa-list" aria-hidden="true">
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
          <ul className="list-user-section">
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
                <i className="fa fa-shopping-cart" aria-hidden="true">
                  {" "}
                  0
                </i>
              </Link>
            </li>
            { console.log(user)}

            {user.Email ? (
              <li>
                  <a className="usermenu">{user.Username} <i className="fa fa-chevron-circle-down" aria-hidden="true"></i>
                    <ul className="dropdown">
                    <li className="dropdown-item">
                      <Link className="dropdown-link">Products Management</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link className="dropdown-link">Users Management</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link className="dropdown-link">Invoices Management</Link>
                    </li>
                  </ul>
                  </a>
                  
              </li>
            ) : (
              <>
                <li>
                  <Link to="/signin">Sign In</Link>
                </li>

                <li>
                  <Link to="/signup">Sign Up</Link>
                </li>
              </>
            )}

            {/* <li>
              <Link to="/signin">
                Sign In
              </Link>
            </li>

            <li>
              <Link to="/signup">
                Sign Up
              </Link>
            </li> */}
          </ul>
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
            <i className="fa fa-shopping-cart" aria-hidden="true">
              {" "}
              0
            </i>
          </Link>
        </li>

        <li>
          <Link to="/signin">Sign In</Link>
        </li>

        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
    </>
  );
};
