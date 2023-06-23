const res = require("express/lib/response");
const usuario = require("../models/usuario")


const existCorreo = async(correo = '') => {
    const correoExist = await usuario.findOne({ correo });
    if (correoExist) {
        throw new Error('El correo ya existe');
    }
}

module.exports = {
    existCorreo
}