require("dotenv").config();
const express = require("express");
let cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const userRoutes = require("./routes/user.routes");
const accountRoutes = require("./routes/account.routes");

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
app.use("/accounts", accountRoutes);
app.use("/users", userRoutes);
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://citrix-availability.up.railway.app");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
