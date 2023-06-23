const { Router } = require('express');
const bodyParser = require("body-parser");

const { pokemonGet, favoritesGet, favoritesPost } = require('../controllers/pokemon')
const jsonParser = bodyParser.json();

const router = Router();

router.get('/', jsonParser, pokemonGet);

router.get('/users/favorites', jsonParser, favoritesGet);

router.post('/users/favorites', jsonParser, favoritesPost);

module.exports = router;