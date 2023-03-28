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
const CategoryRouter = require("./Routes/Products/products.categories.routes");
const ColorRouter = require("./Routes/Products/products.colors.routes");
const UsersRouter = require("./Routes/Users/user.routes.js");
const ShoppingCart = require("./Routes/ShoppingCart/carts.routes");

// create a basic routes
appServer.use("/api/products", ProductsRouter);
appServer.use("/api/products/categories", CategoryRouter);
appServer.use("/api/products/colors", ColorRouter);
appServer.use("/api/users", UsersRouter);
appServer.use("/api/shoppingcart", ShoppingCart);



//export server
module.exports = appServer;