const mongoose = require('mongoose');

const dbonnection = async() => {

    try {

        await mongoose.connect(process.env.DB_CNN);

        console.log('DB Online')
        
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de inicializar DB');
    }


}

module.exports = {
    dbonnection
}