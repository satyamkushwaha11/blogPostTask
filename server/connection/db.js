const mongoose = require("mongoose");
require("dotenv").config();

mongoose.set("strictQuery", true);

const mongooseURI = process.env.DB_URL; // database url

const connectToMongo = async() => {
  mongoose.connect(
    mongooseURI,
    {
      useNewUrlParser: true,
    },
    () => {
      console.log("Connected to Mongo succesfully.");
      return 
    }
  );
 
};

module.exports = connectToMongo;

