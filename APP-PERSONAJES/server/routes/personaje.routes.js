const express = require('express');
const router = express.Router();

const personajeCtrl = require('../controllers/personaje.controller');

router.get('/', personajeCtrl.getPersonajes);
router.get('/:id', personajeCtrl.getPersonaje); 
router.post('/', personajeCtrl.addPersonaje);
router.put('/:id',personajeCtrl.updatePersonaje);
router.delete('/:id',personajeCtrl.deletePersonaje);





 module.exports = router;