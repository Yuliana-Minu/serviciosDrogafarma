const pool = require('../../database');

module.exports = function () {
   
    async function Producto(req){
        
        const data = await pool.query('SELECT * FROM producto ');
        
        return data
    }

    async function RegistroProducto(req){

        const data = await pool.query('INSERT INTO producto set ?',[req]);

    }

    async function ModidicarProducto(pro_codigo, req){

        const data = await pool.query('UPDATE producto SET  ? WHERE pro_codigo = ?',[req, pro_codigo]);

    }



    return{
        Producto,
        RegistroProducto,
        ModidicarProducto, 
    }
}