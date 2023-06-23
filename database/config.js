const mongoose = require('mongoose');

const dbConnectionMongo = async() => {
    try {
        await mongoose.connect(process.env.MONGODBATLAS, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('mongodb online');

    } catch (error) {
        console.error(error);
        throw new Error('Error al conectarme a la base de datos de mongodb hoy');
    }

}

module.exports = {
    dbConnectionMongo
}