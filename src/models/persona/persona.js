const pool = require('../../database');

module.exports = function () {
   
    async function Personas(req){
        
        const data = await pool.query('SELECT per_codigo, per_nombre, per_apellido, per_correo, per_password, per_perfil, perf_nombre FROM persona, perfil WHERE per_perfil = perf_codigo');
        
        return data
    }

    async function ListPersona(per_codigo){
        
        const data = await pool.query('SELECT per_codigo, per_nombre, per_apellido, per_correo, per_password, per_perfil, perf_nombre FROM persona, perfil WHERE per_perfil = perf_codigo AND per_codigo = ?', [per_codigo]);
        
        return data
    }

    async function RegistroPersona(req){

        const data = await pool.query('INSERT INTO persona set ?',[req]);

    }
    

    async function ModificarPersona(per_codigo, req){

        const data = await pool.query('UPDATE persona SET  ? WHERE per_codigo = ?',[req, per_codigo]);

    }



    return{
        Personas,
        RegistroPersona,
        ModificarPersona, 
        ListPersona,
    }
}