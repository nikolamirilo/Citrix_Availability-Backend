const express = require("express");
const getSingleAccount = require("../middleware/account.middleware");
const { addAccount, deleteAccount, getAllAccounts, updateAccount } = require("../controllers/account.controller");

const accountRoutes = express.Router();

accountRoutes.get("/", getAllAccounts);
accountRoutes.post("/", addAccount);
accountRoutes.patch("/:id", getSingleAccount, updateAccount);
accountRoutes.delete("/:id", getSingleAccount, deleteAccount);

module.exports = accountRoutes;
