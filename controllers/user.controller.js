const User = require("../models/user.model");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addUser = async (req, res) => {
  const user = await new User({
    email: req.body.email,
  });
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  if (req.body.email !== null) {
    res.user.email = req.body.email;
  }
  try {
    const updatedUser = await res.user.save();
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    await res.user.remove();
    res.json({ message: "Deleted Adacta's User" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllUsers, addUser, updateUser, deleteUser };
