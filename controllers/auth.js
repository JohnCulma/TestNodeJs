const { response } = require("express");
const Usuario = require('../models/usuario')
const bcryptjs = require('bcryptjs');

const login = async(req, res = response) => {

    const { correo, password } = req.body;

    try {

        //verifico el correo

        const usuario = await Usuario.findOne({ correo });

        if (!usuario) {
            res.status(400).json({
                message: 'Usuario incorrecto - Correo'
            });
        }

        //verifico si el usuario esta activo

        if (!usuario.estado) {
            res.status(400).json({
                message: 'Usuario incorrecto - Estado'
            });
        }

        //verifico la password

        const validacionPwd = bcryptjs.compareSync(password, usuario.password);

        if (!validacionPwd) {
            res.status(400).json({
                message: 'Usuario incorrecto - PWD'
            });
        }

        //Genero el jwt
        res.json({
            message: "Login correcto"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Contacte con el administrador'
        });
    }
}

module.exports = {
    login
}