const express = require('express');
const router = express.Router();
const productoController = require('../../../controllers/producto/producto');

router.get('/listar', async(req, res) =>{
    const productos = await productoController.Productos(req.body);
    res.json({ productos });
});

router.post('/listar_producto/:pro_codigo', async(req, res) =>{

    const  pro_codigo = req.params.pro_codigo;

    const list_producto = await productoController.ListProducto(pro_codigo);
    res.json({ list_producto });
});

router.post('/crear', async(req, res) =>{
    const crear_producto = await productoController.RegistroProducto(req.body);
});

router.put('/modificar/:pro_codigo', async(req, res) =>{
    
    const  pro_codigo = req.params.pro_codigo;

    const modificar_producto = await productoController.ModidicarProducto(pro_codigo, req.body);
});

module.exports = router;