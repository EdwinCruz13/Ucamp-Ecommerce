import { React, createContext, useEffect, useState } from "react";
import Cookies from "universal-cookie";

import { postLoginRequest, postSigupRequest } from "../api/users.api";
import { getAuthorizationRequest } from "../api/users.api";

/**create a context named userContext */
export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  useEffect(() => {
    async function init() {
      await VerifyingToken();
    }

    init();
  }, []);

  const [user, setUser] = useState({
    _id: "",
    Email: "",
    Username: "",
    Password: "",
  });
  const [authStatus, setAuthStatus] = useState(false);

  /**
   * function that allow to verify tokes
   */
  async function VerifyingToken() {
    const cookies = await new Cookies();
    const token = await cookies.get("Token");
    let verification;

    try {
      if (token) {
        const response = await getAuthorizationRequest(token);
        if (response) {
          verification = response.data.data;

          if (verification) {
            await setUser(verification);
            await setAuthStatus(true);
          }

          else{
            await setUser(null);
            await setAuthStatus(false);
            await cookies.remove("Token", { path: "/" });
          }
        }

        
      }
    } catch (error) {
      console.log("Error verifying token: ", error);
    }

    //verify the token
    // if (token) {
    //   const response = await getAuthorizationRequest(token);

    //   if (response) verification = await response.data;
    //   else {
    //     verification = null;
    //     await cookies.remove("Token", { path: "/" });
    //   }
    // } else {
    //   //si no existe el token, borrar cookie
    //   await cookies.remove("Token", { path: "/" });
    // }

    // try {
    //   if (verification) {
    //     await setUser(verification.data);
    //     await setAuthStatus(true);
    //   } else {
    //     await setUser(null);
    //     await setAuthStatus(false);
    //     await cookies.remove("Token", { path: "/" });
    //   }
    // } catch (error) {
    //   console.log("Error verifying token: ", error);
    // }
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
