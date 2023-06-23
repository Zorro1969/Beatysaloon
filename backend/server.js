const express = require("express");
const server = express();
const mongoose = require("mongoose");
const User = require("./models/User");
const Procedure = require("./models/Procedure");
const Order = require("./models/Order");

server.post("/register", async (req, res) => {
  const { username, password, wannabeadmin } = req.body;
  try {
    const userDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
      wannabeadmin,
    });
    res.json(userDoc);
  } catch (e) {
    //e-exception
    res.status(400).json(e);
  }
});

server.get("/profile", (req, res) => {
  const { token } = req.cookies;
  jwt.verify(token, _salt, {}, (err, info) => {
    if (err) throw err;
    res.json(info);
  });
  res.json(req.cookies);
});

server.post("/logout", (req, res) => {
  res.cookie("token", "").json("ok");
});

server.listen(5000);
