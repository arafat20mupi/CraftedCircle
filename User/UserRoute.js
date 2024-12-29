const express = require("express");

const {
  getUsers,
  createUser,
  updateUser,
  getUserByEmail,
} = require("./UserController");

const router = express.Router();

router.get("/users", getUsers);

router.post("/users", createUser);
 
router.put("/users/:id", updateUser);
router.get("/users/:email", getUserByEmail);

module.exports = router;
