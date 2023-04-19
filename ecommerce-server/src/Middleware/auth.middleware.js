const jwt = require('jsonwebtoken')

const { MessageResponse } = require('../Config/message_code')

/**
 * this middleware allows to verify the token for certain private site
 * @param {*} req
 * @param {*} resp
 * @param {*} next
 * @returns
 */
const VerifyToken = (req, resp, next) => {
  const token = req.body.token || req.query.token || req.headers['x-access-token']

  if (!token) {
    let message = new MessageResponse('A token is required for authentication', false, null)
    return resp.status(400).json(message.GetMessage())
  }
  try {
    //verify the token
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

    //get the user token
    req.user = decoded
  } catch (err) {
    let message = new MessageResponse('Invalid Token', false, null)
    return resp.status(400).json(message.GetMessage())
  }
  return next()
}

const Auth_Authorization = async (req, resp, next) => {
  
  try {
    if (req.headers.authorization) {
      //   get the token from the authorization header
      const token = await req.headers.authorization.split(' ')[1]

      //check if the token matches the supposed origin
      const decodedToken = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

      // retrieve the user details of the logged in user
      const user = await decodedToken
      //user.Token = token;

      // pass the user down to the endpoints here
      let _user = { _id: user.user_id, Email: user.Email, Username: user.Username, IsAdministrator: user.IsAdministrator }

      _user.Token = token;
      req.user = _user
    }

    // pass down functionality to the endpoint
    next()
  } catch (error) {
    console.log(error)
    let message = new MessageResponse('Invalid Token', false, null)
    return resp.status(401).json(message.GetMessage())
  }
}

module.exports = { VerifyToken, Auth_Authorization }
