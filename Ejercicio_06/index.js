const express = require("express");
const app = express();

let personas = ["Manu", "Maialen", "Bego", "Diego", "Rafa", "Isabel"]

app.get('/:parametro', function (req, res) {
    res.send(personas);
});


app.get('/:parametro', function (req, res) {
  personas.push(req.params.personas)
    res.send("Se ha añadidoi");
});



app.listen(3000, function() {
  console.log('Escuchando puerto 3000');
});


