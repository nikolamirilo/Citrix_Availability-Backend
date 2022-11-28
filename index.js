require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
let cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const routes = require("./routes/routes");

mongoose.connect(process.env.DATABASE_URL);

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
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
