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

const Products= [{_id: 1, description: "1"}, {_id: 5, description: "5"}];
const Cart = {
  Products: [{_id: 1, description: "1", detail: "i am a detail" }, { _id: 2, description: "2", detail: "i am a detail"}, { _id: 3, description: "3", detail: "i am a detail" }, { _id: 4, description: "4", detail: "i am a detail" }],
  Customer: { _id: 1, name: "leyo1"}
};


const result = Cart.Products.filter((product) => { return Products.some((elemen) =>  { return elemen._id === product._id }) });
console.log(result);






//execute the server asynchronically mode
(async () => {
  await dbConnection();

  //execute websercer
  await server.listen(server.get("port"), () => {
    console.log(`Server on port ${server.get("port")}`);
  });
})();
