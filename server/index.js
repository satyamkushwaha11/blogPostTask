const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const debug = require("debug")("index:startup");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const path = require("path");
const connectToMongo = require("./connection/db");

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(helmet());
app.use(cookieParser());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/", require("./routes"));

app.use(express.static(path.join(__dirname, "../blogpostapp/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../blogpostapp/build/index.html"));
});

if (app.get("env") === "development") {
  app.use(morgan("tiny"));
  debug("morgan logging....");
}

connectToMongo()
  .then(() => {
    app.listen(process.env.PORT || 6000, (err) => {
      if (err) {
        throw err;
      } else {
        console.log(
          `your app is running on PORT : ${process.env.PORT || 6000}`
        );
      }
    });
  })
  .catch((err) => {
    console.log(err);
  });
