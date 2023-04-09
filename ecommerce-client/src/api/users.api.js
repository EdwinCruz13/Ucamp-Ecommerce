import axios from "axios";
import env from "react-dotenv";

/**
 * funtion that allow to signin
 * returns users information and a token
 * @param {*} User
 * @returns
 */
export const postLoginRequest = async (User) => {
  try {
    return await axios.post( env.URLBASE + "users/login", User, {
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
    return await axios.post(env.URLBASE + "users/signup", User, {
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
      url: env.URLBASE + "users/auth-access",
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    };
    return await axios(configuration);
  } catch (error) {}
};


