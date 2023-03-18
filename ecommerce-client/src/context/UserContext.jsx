import { createContext, useState } from "react";

import { postLoginRequest } from "../api/users.api";

/**create a context named userContext */
export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({ _id: "", Email: "", Username: "" });
  const [token, setToken] = useState("");

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

    console.log(user, token);

    //return message response
    return { message: values.message, status: values.code };
  }

  return (
    <UserContext.Provider value={{ user, CreateToken }}>
      {children}
    </UserContext.Provider>
  );
};
