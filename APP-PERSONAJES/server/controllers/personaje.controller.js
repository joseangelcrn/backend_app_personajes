const Personajes = require('../models/personaje');
const Usuarios = require('../models/usuario');

const personajeCtrl = {};


personajeCtrl.getPersonajes =   async  (req,res)=>{

    const personajes = await Personajes.find();

    res.json(personajes);
}

personajeCtrl.getPersonaje =async  (req,res)=>{
    const personaje_obtenido = await Personajes.findById(req.params.id);
    
    res.json(personaje_obtenido);
}

personajeCtrl.addPersonaje = async (req,res)=>{
    const personaje_nuevo = new Personajes(req.body);
    await personaje_nuevo.save(); 
    console.log(personaje_nuevo);
    res.json({
        'status':'Personaje guardado'
    });
    
}

personajeCtrl.updatePersonaje = async(req,res)=>{
    const { id } = req.params;
    
     const personaje_actualizado = {
        nombre_personal: req.body.nombre_personal,
        apel1_personal: req.body.apel1_personal,
        apel2_personal: req.body.apel2_personal,
        pais: req.body.pais,
        ciudad: req.body.ciudad,
        nombre_usuario: req.body.nombre_usuario,
        password_usuario: req.body.password_usuario,
        email_usuario: req.body.email_usuario
    };

    await Personajes.findByIdAndUpdate(id, {$set: personaje_actualizado},{new:true});

    res.json({
        status: 'Usuario con id "'+id+'" ha sido actualizado'
    })
}

personajeCtrl.deletePersonaje = async (req,res)=>{
    
    await Personajes.findByIdAndRemove(req.params.id);
    res.json({
        status: 'El Personaje con id "'+req.params.id+'" ha sido borrado'
    })
}


module.exports = personajeCtrl;
