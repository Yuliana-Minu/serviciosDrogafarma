const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.set('port', process.env.PORT || 4000);


//peticiones
app.use(morgan('dev'));

app.use(express.urlencoded({extended:false}));
app.use(express.json());


//Variables Globales
app.use((req,res,next)=>{
    next();
});

//rutas

app.use(require('./routes'));

app.use('/api/producto',require('./routes/apis/producto/producto'));



//Iniciar Servidor
app.listen(app.get('port'),()=>{
    console.log('server on port', app.get('port'));
})