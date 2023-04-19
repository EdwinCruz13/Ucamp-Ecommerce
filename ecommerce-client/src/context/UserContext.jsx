import { React, createContext, useContext, useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { redirect, useNavigate } from "react-router-dom";

//import api request
import { postLoginRequest, postSigupRequest } from "../api/users.api";
import { getAuthorizationRequest } from "../api/users.api";


/**create a context named userContext */
export const UserContext = createContext();
export const UserContextProvider = ({ children }) => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   async function init() {
  //     await VerifyingToken();
  //     //await GetItemmAdded();
  //   }

  //   init();
  // }, []);

  const [user, setUser] = useState(null);
  const [authStatus, setAuthStatus] = useState(false);

  /**
   * function that allow to verify tokes
   */
  async function VerifyingToken(_public = false) {
    const cookies = await new Cookies();
    const token = await cookies.get("Token");
    let verification;

    //first, check the toke wether exists or not
    if (_public == false) {
      if (token === undefined) {
        alert("you must be logged");
        navigate("/");
      }

      try {
        if (token) {
          const response = await getAuthorizationRequest(token);

          if (response.data) {
            verification = response.data.data;
            console.log(verification)

            if (verification.Token) {
              await setUser(verification);
              await setAuthStatus(true);
            } else {
              await setUser(null);
              await setAuthStatus(false);
              await cookies.remove("Token", { path: "/" });
              navigate("/");
            }
          }
        }
      } catch (error) {
        console.log("Error verifying token: ", error);
      }
    }
  }

  /**
   * create a new user,
   * getting a new token and save it into a cookie variable
   * @param {*} _user
   */
  async function SignupSave(_user) {
    try {
      const response = await postSigupRequest(_user);
      const values = await response.data;

      //define the user useSate
      if (values.code === true) {
        await setUser({
          _id: values.data._id,
          Email: values.data.Email,
          Username: values.data.Username,
        });

        alert(values.message);
      } else {
        alert(values.message);
      }

      //create the cookie
      const cookies = new Cookies();
      cookies.set("Token", values.data.Token, { path: "/" });

      //return message response
      return { message: values.message, status: values.code };
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * funtion that consumes and api request
   * in order to get a token and signin
   */
  async function Signin(_user) {
    //consume a api
    const response = await postLoginRequest(_user);
    //get data
    const values = await response.data;
    //define the user useSate
    if (values.code === true) {
      await setUser({
        _id: values.data._id,
        Email: values.data.Email,
        Username: values.data.Username,
        IsAdministrator: values.data.IsAdministrator
      });

      //create the cookie
      const cookies = new Cookies();
      cookies.set("Token", values.data.Token, { path: "/" });
    } else
      alert("There is a problem logging because your credentials are wrong");

    //return message response
    return { message: values.message, status: values.code };
  }

  /**
   * this function remove the existed cookie
   */
  async function Logout() {
    try {
      const cookies = new Cookies();
      await cookies.remove("Token", { path: "/" });
      setUser(null);
      setAuthStatus(false);


      alert("Exiting of app");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <UserContext.Provider
      value={{ user, authStatus, SignupSave, Signin, Logout, VerifyingToken }}
    >
      {children}
    </UserContext.Provider>
  );
};
