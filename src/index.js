const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.set('port', process.env.PORT || 4000);


//peticiones


//rutas



//Iniciar Servidor
app.listen(app.get('port'),()=>{
    console.log('server on port', app.get('port'));
})