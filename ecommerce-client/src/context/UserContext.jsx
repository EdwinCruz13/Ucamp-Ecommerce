import { createContext, useState } from "react";

import { postLoginRequest } from "../api/users.api";

/**create a context named userContext */
export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  /**
   * funtion that consumes and api request
   * in order to get a token and signin
   */
  async function Login() {
    //consume a api 
    const response = await postLoginRequest();
    //get data
    const values = response.data;

    //define the user useSate
    setUser(values.data)
  }

  return <UserContext.Provider value={{user, Login}}>{children}</UserContext.Provider>;
};
