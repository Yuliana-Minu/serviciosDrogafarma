'use strict' 

const personaModel = require('../../models/persona/persona');

async function Personas (req = null){

    const listadp_personas = await personaModel().Personas(req)
    
    return listadp_personas
}

async function ListPersona (per_codigo){
    //console.log(req);
    const listar_persona = await personaModel().ListPersona(per_codigo)
    return listar_persona

}

async function RegistroPersona (req){
    //console.log(req);
    const registro_persona = await personaModel().RegistroPersona(req)

}

async function ModificarPersona (per_codigo, req){
    //console.log(req);
    const modificacion_persona = await personaModel().ModificarPersona(per_codigo, req)

}

module.exports = {
    Personas,
    RegistroPersona,
    ModificarPersona,
    ListPersona,
}