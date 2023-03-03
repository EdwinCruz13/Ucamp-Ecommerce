require("dotenv").config();
const server = require("./app");
const dbConnection = require("./Config/database");

/*let escalera = "";
let espacio = 0;
let tamaño = 0;
let espacionString = " ";
for (let i = 1; i <= 6; i++) {
  for (let j = 1; j <= 8; j++) {
    escalera = escalera + "*";
    tamaño = j;
  }
  espacio = i * tamaño ;
  escalera = escalera + "\n" +  espacionString.repeat(espacio) + "|" + "\n" + espacionString.repeat(espacio);
}
console.log(escalera);*/

//execute the server asynchronically mode
(async () => {
  await dbConnection();

  //execute websercer
  await server.listen(server.get("port"), () => {
    console.log(`Server on port ${server.get("port")}`);
  });
})();
