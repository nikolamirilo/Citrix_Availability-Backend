const express = require("express");
const getSingleAccount = require("../middleware/account.middleware");
const {
  addAccount,
  deleteAccount,
  getAllAccounts,
  updateAccount,
} = require("../controllers/account.controller");

const routes = express.Router();

routes.get("/", getAllAccounts);
routes.post("/", addAccount);
routes.patch("/:id", getSingleAccount, updateAccount);
routes.delete("/:id", getSingleAccount, deleteAccount);

module.exports = routes;
