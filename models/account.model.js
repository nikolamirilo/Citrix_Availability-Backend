const mongoose = require("mongoose");

//Account model
const accountSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  isAvailable: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("Account", accountSchema);
