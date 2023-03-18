import { React, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Signin.css";

//import the navbar in whole page sections
//import { Navbar } from "../../../components/Navbar/Navbar";

//import user context
import { UserContext } from "../../../context/UserContext";

export const Signin = () => {
  const { CreateToken } = useContext(UserContext);

  //usestate for login
  const [login, setLogin] = useState({ Email: "", Password: "" });

  let navigate = useNavigate();
  /**
   * after submit
   * validate and create a toke
   * then build up the session variable
   * @param {*} e e as evento handler
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    //set a token
    const response = await CreateToken(login);

    if (response.status == true) {
      alert(response.message);

      //redirect to home
      navigate("/home");
    } else {
      console.log(response);
      alert("There are some problems to logging you");
    }
  };

  const handleChange = (event) => {
    //get the data from form
    let _Email = document.getElementById("EmailInput").value;
    let _Passwprd = document.getElementById("PasswordInput").value;

    setLogin({
      Email: _Email,
      Password: _Passwprd,
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
