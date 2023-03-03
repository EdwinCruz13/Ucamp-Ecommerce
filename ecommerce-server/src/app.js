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

//create basic routes 
const ProductsRouter = require("./Routes/Products/products.routes.js");
const Type = require("./Routes/Products/products.types.routes");
const UsersRouter = require("./Routes/Users/user.routes.js");

//
appServer.use("/api/products", ProductsRouter);
appServer.use("/api/products/type", Type);
appServer.use("/api/users", UsersRouter);



//export server
module.exports = appServer;