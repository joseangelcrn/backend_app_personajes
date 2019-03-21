const mongoose = require('mongoose');

const {Schema} = mongoose;


const usuarioSchema = new Schema({
    nombre_personal :{type: String, required : true},
    apel1_personal :{type: String, required : true},
    apel2_personal :{type: String, required : true},
    pais :{type: String, required : true},
    ciudad :{type: String, required : true},
    nombre_usuario :{type: String, required : true},
    password_usuario :{type: String, required : true},
    email_usuario :{type: String, required : true},
    personajes:[{
        id:{type:mongoose.Schema.ObjectId, ref:'PERSONAJES'}
    }]
    
 
});

module.exports = mongoose.model('USUARIOS', usuarioSchema);
