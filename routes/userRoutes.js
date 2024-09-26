const express = require('express');
const { addUserWithAddress } = require('../controllers/userController');

const router = express.Router();

router.post('/addUser', addUserWithAddress);

module.exports = router;
