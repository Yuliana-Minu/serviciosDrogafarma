'use strict' 

const productoModel = require('../../models/producto/producto');

async function Productos (req = null){

    const listado_producto = await productoModel().Producto(req)
    
    return listado_producto
}

async function ListProducto (pro_codigo){

    const list_producto = await productoModel().ListProducto(pro_codigo)
    
    return list_producto
}

async function RegistroProducto (req){
    //console.log(req);
    const registro_producto = await productoModel().RegistroProducto(req)

}

async function ModidicarProducto (pro_codigo, req){
    //console.log(req);
    const modificacion_producto = await productoModel().ModidicarProducto(pro_codigo, req)

}

module.exports = {
    Productos,
    RegistroProducto,
    ModidicarProducto,
    ListProducto
}