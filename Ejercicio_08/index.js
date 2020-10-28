const express = require("express");
const aleatorio = require("./aleatorio.js");
const array = require("./array.js");

const app = express();


app.get('/', (req, res) => {
  let numero = aleatorio();
  array[numero] += 1;
  res.send(array)
});

app.get('/borrar/:numero” ', (req, res) => {
  let numero = parseInt(req.params.numero);
  for (let i = 0; i < array.length; i++) {
    if (numero === array[i]) {
      array[i] = 0;
    }
  }
   res.send(array)
});


app.listen(3000, () => {
  console.log('Escuchando puerto 3000');
});


