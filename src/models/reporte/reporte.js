const pool = require('../../database');

module.exports = function () {
   
    async function ReporteVentas(fecha_inicio, fecha_fin){
        
        const data = await pool.query('SELECT vpr_codigo, vpr_producto, vpr_cantidad, vpr_precio, vpr_fecha, vpr_estado, pro_nombre, (vpr_cantidad * vpr_precio) as precio_total FROM venta_producto, producto WHERE vpr_producto = pro_codigo AND vpr_fecha  BETWEEN ? AND ?', [fecha_inicio, fecha_fin]);
        
        return data
    }

    

    return{
        ReporteVentas,
    }
}