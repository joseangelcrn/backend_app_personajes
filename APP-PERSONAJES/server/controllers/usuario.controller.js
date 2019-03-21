const Usuarios = require('../models/usuario');
const usuarioCtrl = {};


usuarioCtrl.getUsuarios = async (req, res) => {

    const usuarios = await Usuarios.find();

    res.json(usuarios);
}

usuarioCtrl.getUsuario = async (req, res) => {
    const usuario_obtenido = await Usuarios.findById(req.params.id);

    res.json(usuario_obtenido);
}

usuarioCtrl.addUsuario = async (req, res) => {
    const usuario_nuevo = new Usuarios(req.body);
    await usuario_nuevo.save();
    console.log(usuario_nuevo);
    res.json({
        'status': 'Usuario guardado'
    });

}
usuarioCtrl.updateUsuario = async (req, res) => {
    const { id } = req.params;

    const usuario_actualizado = {
        nombre_personal: req.body.nombre_personal,
        apel1_personal: req.body.apel1_personal,
        apel2_personal: req.body.apel2_personal,
        pais: req.body.pais,
        ciudad: req.body.ciudad,
        nombre_usuario: req.body.nombre_usuario,
        password_usuario: req.body.password_usuario,
        email_usuario: req.body.email_usuario
    };

    await Usuarios.findByIdAndUpdate(id, { $set: usuario_actualizado }, { new: true });

    res.json({
        status: 'Usuario con id "' + id + '" ha sido actualizado'
    })
}

/*PRUEBA !!*/



const update = (req, res, next) => {
    let user = req.profile;
    user = _.extend(user, req.body);
    user.updated = Date.now();
    user.save((err, result) => {
        if (err) {
            return next(err);
        }
        return res.status(201).json({
            message: 'Successfully updated'
        });
    });
}

usuarioCtrl.deleteUsuario = async (req, res) => {

    await Usuarios.findByIdAndRemove(req.params.id);
    res.json({
        status: 'El usuario con id "' + req.params.id + '" ha sido borrado'
    })
}

module.exports = usuarioCtrl;
