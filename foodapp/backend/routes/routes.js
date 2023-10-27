
const { createUser} = require("../controller/createUser");
const express = require('express');
const { loginUser } = require("../controller/loginUser");
const { burgerData } = require("../data/Burger");
const router = express.Router();

router.post('/createuser',createUser );
router.post('/login',loginUser );
router.get('/burger',burgerData)
module.exports = router;
