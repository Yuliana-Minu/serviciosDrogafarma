const express = require('express');
const router = express.Router();
const reporteController = require('../../../controllers/reporte/reporte');


router.post('/listar_reporte/:fecha_inicio/:fecha_fin/', async(req, res) =>{

    const  fecha_inicio = req.params.fecha_inicio;
    const  fecha_fin = req.params.fecha_fin;

    const list_reporte = await reporteController.ReporteVentas(fecha_inicio, fecha_fin);
    res.json({ list_reporte });
});

module.exports = router;