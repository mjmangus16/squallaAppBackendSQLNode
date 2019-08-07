const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const jwtKey = process.env.JWT_SECRET;

const Users = require("../models/users-model");

router.get("/", (req, res) => {
  Users.getAll().then(users => {
    for (let i = 0; i < users.length; i++) {
      users[i].programs = users[i].programs.split(", ");
    }
    res.status(200).json(users);
  });
});

module.exports = router;
