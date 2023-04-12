import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";
import "../Signin.css";

export const Signup = () => {
  const { SignupSave, VerifyingToken} = useContext(UserContext);
  const [formData, setFormData] = useState({ Email: "", Username: "", Password: ""});
  let navigate = useNavigate();
  
  //create a handlesubmit in order to catch the datas from the form
  const handleChange = (event) => {
    event.preventDefault();

    //set formdata with the value
    setFormData({ ...formData, [event.target.name]: event.target.value });

    //console.log(formData);
  };

  const handlesubmit = async(event) => {
    event.preventDefault();
     //set a token
     const response = await SignupSave(formData);

     if (response.status) {
      VerifyingToken();
      navigate("/home");
     }
     
 
       //redirect to home
       
    //  } else {
    //    console.log(response);
    //    alert("There are some problems to logging you");
    //  }
  }

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
          <form style={{ width: "40%" }} onSubmit = {handlesubmit}>
            <div className="inputs-box">
              <div>
                <input
                  type="email"
                  name="Email"
                  id="EmailInput"
                  className="form-control"
                  placeholder="Email"
                  onChange={handleChange}
                />
              </div>

              <div>
                <input
                  type="text"
                  name="Username"
                  id="UsernameInput"
                  className="form-control"
                  placeholder="Username"
                  onChange={handleChange}
                />
              </div>

              <div>
                <input
                  type="password"
                  name="Password"
                  id="PasswordInput"
                  className="form-control"
                  placeholder="Password"
                  onChange={handleChange}
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

              <button type="submit" className="btn btn-primary">Sign Up</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};
