const express = require("express");
const app = express();

let persona = {
  nombre: "Pepe",
  apellidos: "Castaño Ruiz",
  edad :"100"}

app.get('/:nombre/:parametro', function (req, res) {
  persona.nombre = req.params.parametro;
  res.send(persona);
});

app.get('/apellidos/:parametro', function (req, res) {
  persona.apellidos = req.params.parametro;
  res.send(persona);
});


app.get('/edad/:parametro', function (req, res) {
  persona.edad = parseInt(req.params.parametro);
  res.send(persona);
});


app.listen(3000, function() {
  console.log('Escuchando puerto 3000');
});

