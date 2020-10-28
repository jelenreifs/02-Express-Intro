const express = require("express");
//const almacen = require("almacen");

const app = express();

const almacen = [
    {
        seccion: "ferreteria",
        productos: [
            {
                nombre : "Estanterías taller",
                precio : 65,
                stock : 8
            },
            {
                nombre : "Escuadra",
                precio : 2.65,
                stock : 203
            },

            {
                nombre : "Espuma",
                precio : 8.50,
                stock : 87
                },
            {
                nombre : "Selladora",
                precio : 12,
                stock : 98
            },
            {
                nombre : "Adhesivo",
                precio : 6.5,
                stock : 34
            },
            {
                nombre : "Cintas adhesiva",
                precio : 3.45,
                stock : 23
            },
            {
                nombre : "Candado",
                precio : 8,
                stock : 23
            },
            {
                nombre : "Tope de puerta",
                precio : 4,
                stock : 12
            },
            {
                nombre : "Tornillería",
                precio : 2,
                stock : 346
            },
            {
                nombre : "Aceites, grasas y lubricantes",
                precio : 12,
                stock : 47
            }
        ]
    },
        {
        seccion: "electricidad",
        productos: [
            {
                nombre : "Lámpara incandescente",
                precio : 120,
                stock : 12
            },
            {
                nombre : "Luces halógenas",
                precio : 68,
                stock : 23
            },

            {
                nombre : "Bombilla bajo consumo",
                precio : 6.50,
                stock : 134
                },
            {
                nombre : "Tubo fluorescente",
                precio : 23,
                stock : 67
            },
            {
                nombre : "Foco LED",
                precio : 168,
                stock : 5
            },
            {
                nombre : "Roseta",
                precio : 12,
                stock : 67
            },
            {
                nombre : "Cable doble",
                precio : 2,
                stock : 28
            },
            {
                nombre : "Interruptor",
                precio : 12.8,
                stock : 6
            },
            {
                nombre : "Enchufe",
                precio : 10,
                stock : 14
            }
        ]
    },
        {
        seccion: "fontaneria",
        productos: [
        {
            nombre : "Llave",
            precio : 24,
            stock : 10
        },
        {
            nombre : "Manguito flexible",
            precio : 7.45,
            stock : 32
        },

        {
            nombre : "Sellador PVC",
            precio : 14.35,
            stock : 22
            },
        {
            nombre : "Tapón fregadero",
            precio : 4,
            stock : 8
        },
        {
            nombre : "Vávula Esfera palanca",
            precio : 45,
            stock : 19
        },
        {
            nombre : "Junta cisterna",
            precio : 18.4,
            stock : 23
        },
        {
            nombre : "Grifo cocina",
            precio : 80,
            stock : 5
        },
        {
            nombre : "Fregadero",
            precio : 89,
            stock : 63
        },
        {
            nombre : "Desatarcador",
            precio : 8.6,
            stock : 47
        }
        ]
    }

]




let cesta;
let rowProduct;

function mostrarProductos(departamento) {
  let almacenSeleccionado = almacen.filter(elemento => elemento.seccion === departamento)
    console.log(departamento)


    let productoSeleccionado = almacenSeleccionado.forEach(element => element.productos)
    productoSeleccionado.forEach( producto => {
        
      rowProduct +=
            `<tr>
                <td>${producto.name}</td>
                  <td>${producto.precio}</td>
                 <td>${producto.stock}</td>
            </tr>`
    }); 

        let tabla = 
            `<table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Stock</th>
                    </tr>
                </thead>
                <tbody>
                    ${rowProduct}
                </tbody>
            </table>` 
    
    return tabla
    
    }




app.get("/ferreteria", function (req, res) {

  const mostrarFerreteria = mostrarProductos("ferreteria");

  res.send(mostrarFerreteria);
});
app.get("/electricidad", function (req, res) {
  const mostrarElectricidad = mostrarProductos("electricidad");

  res.send(mostrarElectricidad);
});
app.get("/fontaneria", function (req, res) {
  const mostrarFontaneria  = mostrarProductos("fontaneria");

  res.send(mostrarFontaneria);
});

/* app.get('/:departamento', (req, res) => {
//app.get('/:departamento', (req, res) => {
   
let departamento = req.params.departamento;
    
   departamento.forEach(producto => {
        rowProduct +=
            `<tr>
                <td>${producto.nombre}</td>
                <td>${producto.precio}</td>
                <td>${producto.stock}</td>
            </tr>`
    });
    
        res.send ( 
       `<table>
			<thead>
				<tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Stock</th>
				</tr>
			</thead>
            <tbody>
                ${rowProduct}
			</tbody>
		</table>`
  )
 
    }); */
    

app.listen(3000, function() {
  console.log('Escuchando puerto 3000');
});


