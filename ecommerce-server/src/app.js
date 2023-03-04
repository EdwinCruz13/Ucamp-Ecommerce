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

//adding routers
const ProductsRouter = require("./Routes/Products/products.routes.js");
const TypeRouter = require("./Routes/Products/products.types.routes");
const ColorRouter = require("./Routes/Products/products.colors.routes");
const UsersRouter = require("./Routes/Users/user.routes.js");

// create a basic routes
appServer.use("/api/products", ProductsRouter);
appServer.use("/api/products/type", TypeRouter);
appServer.use("/api/products/color", ColorRouter);
appServer.use("/api/users", UsersRouter);



//export server
module.exports = appServer;