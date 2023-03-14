import React from "react";
import { Link } from "react-router-dom";
import "../Signin.css";

//import the navbar in whole page sections
import { Navbar } from "../../../components/Navbar/Navbar";

export const Signin = () => {
  return (
    <div className="sign">
      <div id="Sign">
        <section className="Sign-form Sign-container signin-container-form">
          <h1 className="title">Sign In</h1>
          <form style={{ width: "40%" }}>
            <div className="inputs-box">
              <div>
                <input
                  type="text"
                  id="EmailInput"
                  className="form-control"
                  placeholder="Correo"
                />
              </div>

              <div>
                <input
                  type="password"
                  id="EPasswordInput"
                  className="form-control"
                  placeholder="Contraseña"
                />
              </div>

              <div>
                <Link to="/" className="form-link">
                  Did you forget your password?
                </Link>
              </div>
              <button className="btn btn-primary">Sign In</button>
            </div>
          </form>
        </section>

        <aside className="Sign-aside Sign-container signin-container-info">
          <h1 className="title">Hello my friend</h1>
          <article>
            <p>Enter your personal details and start </p>
            <p>the journey with us!</p>
          </article>

          <div>
           
            <Link to="/Signup" className="btn btn-primary">
                Sign Up
            </Link>

            <Link to="/home" className="btn btn-primary">
                Home
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
};
