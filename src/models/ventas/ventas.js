const pool = require('../../database');

module.exports = function () {
   
    async function Ventas(req){
        
        const data = await pool.query('SELECT vpr_codigo, vpr_producto, vpr_cantidad, vpr_precio, vpr_fecha, vpr_estado, pro_nombre, (vpr_cantidad * vpr_precio) as precio_total FROM venta_producto, producto WHERE vpr_producto = pro_codigo');
        
        return data
    }

    async function ListVenta(vpr_codigo){
        
        const data = await pool.query('SELECT vpr_codigo, vpr_producto, vpr_cantidad, vpr_precio, vpr_fecha, vpr_estado, pro_nombre, (vpr_cantidad * vpr_precio) as precio_total FROM venta_producto, producto WHERE vpr_producto = pro_codigo AND vpr_codigo = ?', [vpr_codigo]);
        
        return data
    }

    async function RegistroVenta(req){

        const data = await pool.query('INSERT INTO venta_producto set ?',[req]);

    }
    

    async function ModificarVenta(vpr_codigo, req){

        const data = await pool.query('UPDATE venta_producto SET  ? WHERE vpr_codigo = ?',[req, vpr_codigo]);

    }

    async function Eliminar(vpr_codigo){

        const data = await pool.query('DELETE FROM venta_producto WHERE vpr_codigo = ?',[vpr_codigo]);

    }



    return{
        Ventas,
        RegistroVenta,
        ModificarVenta, 
        ListVenta,
        Eliminar
    }
}