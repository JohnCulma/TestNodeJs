require('dotenv').config();

const Server = require('./models/server');

//Instancia de la clase server
const server = new Server();

//Puerto del servidor
server.listen();