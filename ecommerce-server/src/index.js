require("dotenv").config();
const server = require("./app");
const dbConnection = require("./Config/database");

//execute the server asynchronically mode
(async () => {
  await dbConnection();

  //execute websercer
  await server.listen(server.get("port"), () => {
    console.log(`Server on port ${server.get("port")}`);
  });
})();
