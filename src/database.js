const mongoose = require('mongoose');

//Recordar revisar la IP de la Base
const URI = 'mongodb://localhost/mern-tasks'
const config = {
  autoIndex: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
};
mongoose.connect(URI, config)
  .then(db => console.log('DB is connected'))
  .catch(err => console.error('ERROR CATCHEADO\n',err)); // aca iria la direccion de la base de datos

module.exports = mongoose; // se exportara al index.js (servidor)