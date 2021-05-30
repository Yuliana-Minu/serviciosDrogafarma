const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');


const app = express();

app.set('port', process.env.PORT || 4000);


//peticiones
app.use(morgan('dev'));
app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


//Variables Globales
app.use((req, res, next) => {
    next();
});

//rutas

app.use(require('./routes'));

app.use('/api/producto', require('./routes/apis/producto/producto'));
app.use('/api/persona', require('./routes/apis/persona/persona'));
app.use('/api/ventas', require('./routes/apis/ventas/ventas'));
app.use('/api/reporte', require('./routes/apis/reporte/reporte'));



//Iniciar Servidor
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
})