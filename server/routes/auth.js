const express = require('express');
const  currentUser  = require("../controllers/auth.js");

const router = express.Router();

router.post("/api/auth/current-user", currentUser)

module.exports = router;