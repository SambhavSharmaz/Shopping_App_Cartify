const express = require('express');
const {userRegisterController, userLoginController} = require('./controllers');
const authRouter = express.Router();

authRouter.post("/signup",userRegisterController)
authRouter.post("/signin",userLoginController)


module.exports = {authRouter};