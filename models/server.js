const express = require('express')
const cors = require('cors');
const axios = require('axios');
const { dbConnectionMongo } = require('../database/config');
const res = require('express/lib/response');


class Server {
    //Constructor de la clase server
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosRoutesPath = '/api/usuarios';
        this.authPath = '/api/auth';
        this.serviceRoutePokemon = '/api/pokemon';

        //Conexión a base de datos
        this.conexionDbMongo();

        //Midlewares
        this.midlewares();

        //Rutas de aplicacion
        this.routes();
    }

    async conexionDbMongo() {
        await dbConnectionMongo();
    }

    midlewares() {
        //Directorios publicos
        this.app.use(express.static('public'));
        this.app.use(cors());
    }

    routes() {
        this.app.use(this.authPath, require('../routes/auth'));
        this.app.use(this.usuariosRoutesPath, require('../routes/users'));
        this.app.use(this.serviceRoutePokemon, require('../routes/pokemon'));
    }

    //Metodo donde encuentro el puerto del servidor
    listen() {
        this.app.listen(this.port, () => {
            console.log('Puerto', this.port);
        });
    }
}

module.exports = Server;