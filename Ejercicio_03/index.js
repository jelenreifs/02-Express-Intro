const express = require("express");
const app = express();

let arrayNombres = [ "Laura" , "Imanol" , "June" , "Haizea" , "Luis" , 
]

let mensaje;

app.get('/:personas', function (req, res) {
  for (let i = 0;  i < arrayNombres.length; i++) {
    mensaje += `<h1>${arrayNombres[i]}</h1>` 
    
  }
  res.send("persona")
});


app.get('/:personas/:nombre', function (req, res) {
  let nombre = req.params.nombre;


  for (let i = 0;  i < arrayNombres.length; i++) {
    if (nombre === array[i]) {
      res.send(arrayNombres[i]);
    } 
    
  }
  res.send("error");
});




app.listen(3000, function() {
  console.log('Aplicación ejemplo, escuchando el puerto 3000!');
});


