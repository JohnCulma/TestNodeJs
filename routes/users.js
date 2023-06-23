const { Router } = require('express');
const bodyParser = require("body-parser");
const { usuariosGet, usuariosPost } = require('../controllers/usuarios');
const { check } = require('express-validator');

const router = Router();
const jsonParser = bodyParser.json();

//
router.get('/', usuariosGet);
//
router.post('/',
    //check('correo', 'El correo no es valido').isEmail(),
    jsonParser,
    usuariosPost
);
//
router.delete('/', (req, res) => {
    res.json({
        ok: true,
        message: 'delete api'
    });
});
//
router.patch('/', (req, res) => {
    res.json({
        ok: true,
        message: 'patch api'
    });
});

//
router.put('/', (req, res) => {
    res.json({
        ok: true,
        message: 'put api'
    })
});

module.exports = router;