const express = require("express");
const server = express();
const mongoose = require("mongoose");
const User = require("./models/User");
const Procedure = require("./models/Procedure");
const Order = require("./models/Order");

server.listen(5000);
