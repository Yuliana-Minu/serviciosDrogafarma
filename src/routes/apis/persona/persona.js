const express = require('express');
const router = express.Router();
const personaController = require('../../../controllers/persona/persona');

router.get('/listar', async(req, res) =>{
    const personas = await personaController.Personas(req.body);
    res.json({ personas });
});

router.post('/listar_persona/:per_codigo', async(req, res) =>{

    const  per_codigo = req.params.per_codigo;

    const list_persona = await personaController.ListPersona(per_codigo);
    res.json({ list_persona });
});

router.post('/crear', async(req, res) =>{
    const crear_persona = await personaController.RegistroPersona(req.body);
});

router.put('/modificar/:per_codigo', async(req, res) =>{
    
    const  per_codigo = req.params.per_codigo;

    const modificar_producto = await personaController.ModificarPersona(per_codigo, req.body);
});

module.exports = router;