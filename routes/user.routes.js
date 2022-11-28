const express = require("express");
const getSingleUser = require("../middleware/user.middleware");
const { addUser, deleteUser, getAllUsers, updateUser } = require("../controllers/user.controller");

const userRoutes = express.Router();

userRoutes.get("/", getAllUsers);
userRoutes.post("/", addUser);
userRoutes.patch("/:id", getSingleUser, updateUser);
userRoutes.delete("/:id", getSingleUser, deleteUser);

module.exports = userRoutes;
