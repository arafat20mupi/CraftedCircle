const express = require("express");

const {
  getUsers,
  createUser,
  updateUser,
  getUserById,
} = require("./UserController");

const router = express.Router();

router.get("/users", getUsers);

router.post("/Users", createUser);

router.put("/users/:id", updateUser);
router.get("/users/:id", getUserById);

module.exports = router;
