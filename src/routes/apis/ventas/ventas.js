const express = require('express');
const router = express.Router();
const ventasController = require('../../../controllers/ventas/ventas');

router.get('/listar', async(req, res) =>{
    const ventas = await ventasController.Ventas(req.body);
    res.json({ ventas });
    
});

router.post('/listar_venta/:vpr_codigo', async(req, res) =>{

    const  vpr_codigo = req.params.vpr_codigo;

    const list_venta = await ventasController.ListVenta(vpr_codigo);
    res.json({ list_venta });
});

router.post('/crear', async(req, res) =>{
    const crear_venta = await ventasController.RegistroVenta(req.body);
});

router.put('/modificar/:vpr_codigo', async(req, res) =>{
    
    const  vpr_codigo = req.params.vpr_codigo;

    const modificar_venta = await ventasController.ModificarVenta(vpr_codigo, req.body);
});

router.delete('/eliminar/:vpr_codigo', async(req, res) =>{
    
    const  vpr_codigo = req.params.vpr_codigo;

    const eliminar_venta = await ventasController.Eliminar(vpr_codigo);
});
module.exports = router;