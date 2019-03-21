const mongoose = require('mongoose');

const {Schema} = mongoose;


const personajeSchema = new Schema({
    nombre :{type: String, required : true},
    apellidos :{type: String, required : true},
    mundo :{type: String, required : true},
    lugar_mundo :{type: String, required : true},
    raza :{type: String, required : true},
    edad :{type: Number, required : true},
    clase :{type: String, required : true},
    oficio :{type: String, required : true},
    historia :{type: String, required : true}
    
});

module.exports = mongoose.model('PERSONAJES', personajeSchema);
