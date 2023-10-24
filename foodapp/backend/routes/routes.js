
const { createUser} = require("../controller/createUser");
const express = require('express');
const { loginUser } = require("../controller/loginUser");
const router = express.Router();

router.post('/createuser',createUser );
router.post('/login',loginUser );

module.exports = router;
