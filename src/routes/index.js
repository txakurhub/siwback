const { Router } = require("express");

const router = Router();

//  IMPORTS
const authRouter = require("./authRouter");

//  ROUTES
router.use("/login", authRouter);
router.use("/register", authRouter);
