import React from "react";
import { Link } from "react-router-dom";
import "../Signin.css";

export const Signup = () => {
  return (
    <div className="sign">
      <div id="Sign">
        <aside className="Sign-aside Sign-transformation Sign-container signup-container-info">
          <h1 className="title">Welcome back!</h1>
          <article>
            <p>To keep connected with us please login</p>
            <p>with your personal info.</p>
          </article>

          <div>
            <Link to="/Signin" className="btn btn-primary">
              Sign In
            </Link>

            <Link to="/home" className="btn btn-primary">
              Home
            </Link>
          </div>
        </aside>

        <section className="Sign-form Sign-container signup-container-form">
          <h1 className="title">Sign Up</h1>
          <form style={{ width: "40%" }}>
            <div className="inputs-box">
              <div>
                <input
                  type="text"
                  id="EmailInput"
                  className="form-control"
                  placeholder="Email"
                />
              </div>

              <div>
                <input
                  type="password"
                  id="PasswordInput"
                  className="form-control"
                  placeholder="Password"
                />
              </div>

              <div>
                <input
                  type="password"
                  id="PasswordInput"
                  className="form-control"
                  placeholder="Repeat your password"
                />
              </div>


              <button className="btn btn-primary">Sign Up</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};
