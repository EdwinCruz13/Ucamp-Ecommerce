import { React, useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../Signin.css";

//import the navbar in whole page sections
//import { Navbar } from "../../../components/Navbar/Navbar";

//import user context
import { UserContext } from "../../../context/UserContext";

export const Signin = () => {
  const { Login } = useContext(UserContext);

  //usestate for login
  const [login, setLogin] = useState({ Email: "", Password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(login);
  };

  const handleChange = (event) => {
    //get the data from form
    let _Email = document.getElementById("EmailInput").value;
    let _Passwprd = document.getElementById("PasswordInput").value;

    setLogin({
      Email:  _Email, 
      Password: _Passwprd
    });

    //console.log(login);
  };

  return (
    <div className="sign">
      <div id="Sign">
        <section className="Sign-form Sign-container signin-container-form">
          <h1 className="title">Sign In</h1>
          <form style={{ width: "40%" }} onSubmit={handleSubmit}>
            <div className="inputs-box">
              <div>
                <input
                  type="text"
                  id="EmailInput"
                  className="form-control"
                  placeholder="Email"
                  onChange={handleChange}
                />
              </div>

              <div>
                <input
                  type="password"
                  id="PasswordInput"
                  className="form-control"
                  placeholder="Password"
                  onChange={handleChange}
                />
              </div>

              <div>
                <Link to="/" className="form-link">
                  Did you forget your password?
                </Link>
              </div>
              <button type="submit" className="btn btn-primary">
                Sign In
              </button>
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
