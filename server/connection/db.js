const mongoose = require("mongoose");
require("dotenv").config();

mongoose.set("strictQuery", true);

const mongooseURI = process.env.DB_URL; // database url

// const db = () => {
//   mongoose.connect(dataBaseUrl, (err) => {
//     if (err) {
//       console.log("DB Error!", err);
//     } else {
//       console.log("DB connected!");
//       return
//     }
//   });
// };


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

// module.exports =db;