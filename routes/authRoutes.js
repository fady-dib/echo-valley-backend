const { Router } = require("express");
const router = Router();

const { login } = require("../controllers/authController.js")

router.post("/login", login);

module.exports = router;