const mongoose = require('mongoose');

const mongooseConnect = async () =>{
    try {
        const connection = await mongoose.connect(process.env.DataBase);
        if(connection) {
            console.log('Connected to MongoDB DataBase');
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = mongooseConnect;