'use strict' 

const ventasModel = require('../../models/ventas/ventas');

async function Ventas (req = null){

    const listado_ventas = await ventasModel().Ventas(req)
    
    return listado_ventas
}

async function ListVenta (vpr_codigo){
    //console.log(req);
    const listar_venta = await ventasModel().ListVenta(vpr_codigo)
    return listar_venta

}

async function RegistroVenta (req){
    //console.log(req);
    const registro_venta = await ventasModel().RegistroVenta(req)

}

async function ModificarVenta (vpr_codigo, req){
    //console.log(req);
    const modificacion_persona = await ventasModel().ModificarVenta(vpr_codigo, req)

}

async function Eliminar (vpr_codigo){
    //console.log(req);
    const eliminar_venta = await ventasModel().Eliminar(vpr_codigo)

}

module.exports = {
    Ventas,
    RegistroVenta,
    ModificarVenta,
    ListVenta,
    Eliminar,
}