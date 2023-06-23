const { default: axios } = require('axios');
const { Router } = require('express');
const Pokemon = require('../models/pokemon');
const { validationResult } = require('express-validator');

const router = Router();


const pokemonGet = async(req, res = response) => {

    const resp = await axios.get(process.env.POKEMONURL)

    const data = resp.data;
    const result = data.results;

    res.json({
        result
    })
}

const favoritesGet = async(req, res = response) => {

    const { limite = 10 } = req.query;
    console.log(req);
    const pokemon = await Pokemon.find()
        .limit(Number(limite));

    const totalDatos = await Pokemon.count();
    res.json({
        totalDatos,
        pokemon
    });
}

const favoritesPost = async(req, res = response) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log(errors);
        return res.status(400).json(errors);
    }

    const { name, url, idUsuario } = req.body;
    console.log(req.body)
    const pokemon = new Pokemon({ name, url, idUsuario });

    //guardar en bd
    await pokemon.save();

    res.json({
        message: 'Registro de pokemon favoritos !exitoso¡',
    })
}

module.exports = {
    pokemonGet,
    favoritesGet,
    favoritesPost
}