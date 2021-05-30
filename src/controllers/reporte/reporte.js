'use strict' 

const reporteModel = require('../../models/reporte/reporte');

async function ReporteVentas (fecha_inicio, fecha_fin){
    //console.log(req);
    const listar_venta = await reporteModel().ReporteVentas(fecha_inicio, fecha_fin)
    return listar_venta

}


module.exports = {
    ReporteVentas,
}