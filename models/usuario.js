const { Schema, model } = require('mongoose');

const schemaUsuario = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    correo: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatorio'],
    },
    estado: {
        type: Boolean,
        default: true
    }
});

module.exports = model('Usuarios', schemaUsuario);