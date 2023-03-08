const express = require('express');
const router = express.Router();

const main = require('../controllers/main.controller')

router.get('/', main.home);

module.exports = router;