import { React, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

//import userContext
import { UserContext } from "../../context/UserContext";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";

import "./Navbar.css";

/*
 <Navigate to='/login' replace />
 */

export const Navbar = () => {
  //get the user context saved
  const { user, authStatus, Logout, VerifyingToken } = useContext(UserContext);
  const { itemsAdded, GetItemmAdded } = useContext(ShoppingCartContext);

  //check for any changes on the useState "user"
  // useEffect(() => {
  //   async function init(){
  //     await VerifyingToken(false); 
  //     await GetItemmAdded();
  //   }

  //   init(); 
  // }, []); 
  

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
                  { itemsAdded }
                </i>
              </Link>
            </li>

            {authStatus ? (
              <li className="usermenu">
                 {user.Username}{" "}
                  <i
                    className="fa fa-chevron-circle-down"
                    aria-hidden="true"
                  ></i>
                  <ul className="dropdown">
                    <li className="dropdown-item">
                      <Link to="/product" className="dropdown-link">
                        Products Management
                      </Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/color" className="dropdown-link">Colors Management</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/invoices" className="dropdown-link">Invoices Management</Link>
                    </li>

                    <li className="dropdown-item">
                      <Link className="dropdown-link" onClick={Logout}>Logout</Link>
                    </li>
                  </ul>
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

            {authStatus ? (
              <li className="usermenu">
                 {user.Username}{" "}
                  <i
                    className="fa fa-chevron-circle-down"
                    aria-hidden="true"
                  ></i>
                  <ul className="dropdown">
                    <li className="dropdown-item">
                      <Link to="/product" className="dropdown-link">
                        Products Management
                      </Link>
                    </li>
                    <li className="dropdown-item">
                      <Link className="dropdown-link">Users Management</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link className="dropdown-link">Invoices Management</Link>
                    </li>

                    <li className="dropdown-item">
                      <Link className="dropdown-link" onClick={Logout}>Logout</Link>
                    </li>
                  </ul>
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
      </ul>
    </>
  );
};
