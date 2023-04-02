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

/**
 * allow to register a new user
 * @param {*} User 
 * @returns 
 */
export const postSigupRequest = async (User) => {
  try {
    return await axios.post("http://localhost:5000/api/users/signup", User, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error)
  }
};

/**
 * allow to verify the existed token
 * @param {*} Token 
 * @returns 
 */
export const getAuthorizationRequest = async (Token) => {
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


