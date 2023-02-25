//imports moudles
const express = require("express");
const cors = require("cors");

//initialize the webserver with express
const appServer = express();

//settings
appServer.set("port", process.env.EXPRESS_PORT);

//middleware
appServer.use(cors());
appServer.use(express.json());

//routes
const ProductsRouter = require("./Routes/products.route.js");
const UsersRouter = require("./Routes/user.route.js");

appServer.use("/api/products", ProductsRouter);
appServer.use("/api/users", UsersRouter);



//export server
module.exports = appServer;