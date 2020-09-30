const express = require('express')
const compression = require('compression');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

// Configurando el puerto
app.set('port', process.env.PORT || 3000);

// Definiendo los middlewares
app.use(express.json());
app.use(compression());
app.use(morgan('dev'));
app.use(cors());

// Rutas
app.use('/api/post', require('./routes/'));

// Static folder
app.use(express.static(__dirname + '/public/'));

// Inicie el servidor independiente si se ejecuta directamente
app.listen(app.get('port'), () => {
  console.log('Server on port ', app.get('port'));
});

module.exports = app;