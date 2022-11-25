const express = require("express");
const Account = require("../models/account");
const getSingleAccount = require("../middleware/getSingleAccount");

const routes = express.Router();

routes.get("/", async (req, res) => {
  try {
    const accounts = await Account.find();
    res.send(accounts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//? Create account bar

routes.post("/", async (req, res) => {
  const account = await new Account({
    username: req.body.username,
    isAvailable: req.body.isAvailable,
  });
  try {
    const newAccount = await account.save();
    res.status(201).json(newAccount);
  } catch (err) {
    res.status(400).json({ message: error.message });
  }
});

//Edit username and change select state on change
routes.patch("/:id", getSingleAccount, async (req, res) => {
  if (req.body.username !== null) {
    res.account.username = req.body.username;
  }
  if (req.body.isAvailable !== null) {
    res.account.isAvailable = req.body.isAvailable;
  }
  try {
    const updatedAccount = await res.account.save();
    res.json(updatedAccount);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
routes.delete("/:id", getSingleAccount, async (req, res) => {
  try {
    await res.account.remove();
    res.json({ message: "Deleted Citrix Account" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = routes;
