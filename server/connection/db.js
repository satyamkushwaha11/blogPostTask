const mongoose = require("mongoose");
require("dotenv").config();

mongoose.set("strictQuery", true);

const dataBaseUrl = process.env.DB_URL || "mongodb://localhost:27017/blogpost"; // database url

mongoose.connect(dataBaseUrl, (err) => {
  if (err) {
    console.log("DB Error!", err);
  } else {
    console.log("DB connected!");
  }
});
