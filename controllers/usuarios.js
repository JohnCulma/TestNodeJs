const { response } = require('express');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const Usuario = require('../models/usuario');

const usuariosGet = async(req, res = response) => {

    const { limite = 10 } = req.query;
    const usuarios = await Usuario.find()
        .limit(Number(limite));

    const totalUsuarios = await Usuario.count();
    res.json({
        totalUsuarios,
        usuarios
    });
}

const usuariosPost = async(req, res = response) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }

    const { nombre, correo, password } = req.body;
    //console.log(body)
    const usuario = new Usuario({ nombre, correo, password });

    //verifico si existe el correo

    //Encripto la pwd
    const salt = bcryptjs.genSaltSync(10);

    usuario.password = bcryptjs.hashSync(password, salt);

    //guardar en bd
    await usuario.save();

    res.json({
        message: 'post api controller',
        usuario
    })
}

module.exports = {
    usuariosGet,
    usuariosPost
}