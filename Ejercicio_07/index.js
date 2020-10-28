const express = require("express");
const aleatorio = require("./aleatorio.js");
const array = require("./array.js");

const app = express();


app.get('/', (req, res) => {
  let numero = aleatorio();
  array[numero] += 1;
  res.send(array)
});


app.listen(3000, function() {
  console.log('Escuchando puerto 3000');
});


