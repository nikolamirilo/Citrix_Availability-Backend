const mongoose = require("mongoose");

//User model
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
