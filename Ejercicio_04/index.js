const express = require("express");
const app = express();

const saludo = require("./saludo");

app.get('/', function (req, res) {
  res.send(saludo())
});



app.listen(3000, function() {
  console.log('Escuchando puerto 3000');
});


