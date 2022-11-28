const Account = require("../models/account.model");

const getSingleAccount = async (req, res, next) => {
  let account;
  try {
    account = await Account.findById(req.params.id);
    if (account === null) {
      return res.status(404).json({ message: "Cannont find account" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.account = account;
  next();
};

module.exports = getSingleAccount;
