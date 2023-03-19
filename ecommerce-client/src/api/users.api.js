import axios from "axios";

/**
 * funtion that allow to signin
 * returns users information and a token
 * @param {*} User
 * @returns
 */
export const postLoginRequest = async (User) => {
  try {
    return await axios.post("http://localhost:5000/api/users/login", User, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {}
};

export const getAuthorizationRequest = async (Token) => {
  console.log(Token);
  try {
    const configuration = {
      method: "get",
      url: "http://localhost:5000/api/users/auth-access",
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    };

    return await axios(configuration);
  } catch (error) {}
};
