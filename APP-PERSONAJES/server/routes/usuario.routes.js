const express = require('express');
const router = express.Router();

const usuarioCtrl = require('../controllers/usuario.controller');

router.get('/', usuarioCtrl.getUsuarios);
router.get('/:id', usuarioCtrl.getUsuario); 
router.post('/', usuarioCtrl.addUsuario);
router.put('/:id',usuarioCtrl.updateUsuario);
router.delete('/:id',usuarioCtrl.deleteUsuario);

 module.exports = router;