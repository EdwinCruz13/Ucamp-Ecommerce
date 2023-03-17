import axios from "axios";

/**
 * funtion that allow to signin 
 * returns users information and a token
 * @param {*} User 
 * @returns 
 */
export const postLoginRequest = async (User) => {
  return await axios.post("http://localhost:5000/api/users/login", User,{
    headers: {
      "Content-Type": "application/json",
    },
  });
};
