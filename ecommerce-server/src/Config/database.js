const mongoose = require("mongoose");

//mydatabse
const uri = process.env.MONGODB_URI;

const dbConnection = () => {
  try {
    //conect to our database
    mongoose.set("strictQuery", false);
    mongoose.connect(process.env.MONGODB_URI);

    //when the connection is opened show through console the opened connection
    mongoose.connection
      .once("open", () => {
        console.log("MongoDB Running");
      })
      .on("disconnected", () => console.warn("Mongo disconnected"))
      .on("error", (err) => {
        console.error(err);
      });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = dbConnection;
