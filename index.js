const express = require("express");
const mongoose = require("mongoose");
let cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const routes = require("./routes/routes");

mongoose.connect(
  "mongodb+srv://nikola:react123@main.iresckc.mongodb.net/database?retryWrites=true&w=majority"
);

const db = mongoose.connection;
db.on("error", (err) => {
  console.error("connection error;", err);
});
db.once("open", () => {
  console.log("Successfully connected!");
});

app.use(bodyParser.json());
app.use(cors());
app.use("/accounts", routes);

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
