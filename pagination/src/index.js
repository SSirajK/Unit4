const express = require('express')

const transporter = require("./configs/mail")

const usersController = require("./controllers/user.controllers")

const adminsController = require("./controllers/admin.controllers")

const app = express();

app.use(express.json())

app.use("/users", usersController);

app.use("/admins", adminsController)

module.exports = app;