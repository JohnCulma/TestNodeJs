const { Router } = require('express');
const bodyParser = require("body-parser");
const { check } = require('express-validator');

const { login } = require('../controllers/auth')
const jsonParser = bodyParser.json();

const router = Router();

router.post('/login', jsonParser, login);

module.exports = router;