//------------Servidor---------------
const express = require('express');
const morgan = require('morgan');
const path = require('path');

const { mongoose } = require('./database');

const app = express(); // servidor

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev')); // informacion en consola acerca de las rutas
app.use(express.json()); /* la aplicacion va a chequear que todo lo que le llegue 
                            sea en formato JSON. Si lo es vamos a poder acceder a el */
                
// Routes
app.use('/api/tasks',require('./routes/task.routes')); // el primer parametro es que se va a tomar como ruta defecto (antes / solo)

// Static files
//console.log(path.join(__dirname,'public')); //path se encarga de concatener direcotrio independientemente si estamos en linux o windows
app.use(express.static(path.join(__dirname,'public')))// cuando el cliente acceda a http://<dominio>:<puerto>/ quiero que obtenga la applicacion de React 

// Starting the server
app.listen(app.get('port'), () => {
  console.log(`server on port: ${app.get('port')}`);
});