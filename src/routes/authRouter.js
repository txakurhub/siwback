const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.get("/login", authController.login);
router.post("/signup", authController.signup);

module.exports = router;
 