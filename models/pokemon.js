const { Schema, model } = require('mongoose');

const schemaPokemon = Schema({
    name: {
        type: String,
        required: [true, 'El name es obligatorio']
    },
    url: {
        type: String,
        required: [true, 'La url es obligatoria']
    },
    idUsuario: {
        type: String,
        required: [true, 'La idUsuario es obligatorio']
    }
});

module.exports = model('Pokemons', schemaPokemon);