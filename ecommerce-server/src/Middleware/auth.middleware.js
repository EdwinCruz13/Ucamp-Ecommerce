const jwt = require("jsonwebtoken");

const { SuccessMessage, FailureMessage } = require("../Config/message_code");

/**
 * this middleware allows to verify the token for certain private site
 * @param {*} req
 * @param {*} resp
 * @param {*} next
 * @returns
 */
const VerifyToken = (req, resp, next) => {
  const token = req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    FailureMessage.message = "A token is required for authentication";
    FailureMessage.data = null;
    return resp.status(400).json(FailureMessage);
  }
  try {
    //verify the token
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    //get the user token
    req.user = decoded;

    
  } catch (err) {
    FailureMessage.message = "Invalid Token";
    FailureMessage.data = null;
    return resp.status(400).json(FailureMessage);
  }
  return next();
};

module.exports = { VerifyToken };
