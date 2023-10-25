const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.post("/login", authController.login);
router.post("/signup", authController.signup);
router.put("/update", authController.update);
router.get("/recover", authController.getUserInfo);

module.exports = router;
