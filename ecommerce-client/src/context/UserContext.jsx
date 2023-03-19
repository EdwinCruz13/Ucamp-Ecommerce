import { createContext, useState, useRef } from "react";
import Cookies from 'universal-cookie';

import { postLoginRequest } from "../api/users.api";

/**create a context named userContext */
export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({ _id: "", Email: "", Username: "" });
  const [token, setToken] = useState("");

  //const login = useRef(); 

  /**
   * funtion that consumes and api request
   * in order to get a token and signin
   */
  async function CreateToken(_user) {
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

      //get the token
      await setToken(values.data.Token);
    }

    //console.log(user, token);

    //create the cookie
    const cookies = new Cookies();
    cookies.set('Token', values.data.Token, {path: '/'});

    //check the cookie
    //console.log(cookies.get('Token')); //
    

    //return message response
    return { message: values.message, status: values.code };
  }

  /**
   * this function remove the existed cookie
   */
  async function Logout(){
    try {
      const cookies = new Cookies();
      await cookies.remove("Token", { path: "/" });
      return { message: "", status: true };
    } catch (error) {
      return { message: error, status: false };
    }
  }

  return (
    <UserContext.Provider value={{ user, CreateToken, Logout }}>
      {children}
    </UserContext.Provider>
  );
};
