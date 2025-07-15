// Users/routes.js
const express = require("express");
const { getuserdetailscontroller } = require("./controllers.js");

const userRouter = express.Router();

userRouter.get("/", getuserdetailscontroller);

module.exports = { userRouter };
