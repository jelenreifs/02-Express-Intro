const express = require("express");

/* const app = express();

app.use(express.static(__dirname + '/public/'));

app.listen('3000', function() {
  console.log('Servidor web escuchando en el puerto 3000');
}); */

const app = express();

app.get('/', function(req, res) {
    res.send(`<h1>Hola Mundo!</h1>
  <h4>Desde express plisplas</h4>`);
});

app.listen(3000, function() {
  console.log('Aplicación ejemplo, escuchando el puerto 3000!');
});