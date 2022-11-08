
const carrito = [];
<<<<<<< HEAD
const paquete = [{}, {}]
=======
const paquete = {};
>>>>>>> 0379e05aa9800c630c3232fd33a5ff02fdc55254



const formulario = document.querySelector("#formulario");
formulario.addEventListener("submit", destinos);

const btn = document.querySelector("#btn");
<<<<<<< HEAD

=======
console.log(btn);
>>>>>>> 0379e05aa9800c630c3232fd33a5ff02fdc55254




function calcularPrecio(precioPromo, precioIndividual) {

<<<<<<< HEAD
    const personas = document.querySelector("#personas");



    //console.log(personas);
    //console.log(personas.value);

    paquete.afluencia = personas.value;

=======

    
    const personas = document.querySelector("#personas");
    paquete.afluencia = personas.value;
>>>>>>> 0379e05aa9800c630c3232fd33a5ff02fdc55254
    localStorage.setItem("paquete", JSON.stringify(paquete));


    if (personas.value == 2) {
<<<<<<< HEAD
        //console.log(precioPromo);
        carrito.push("Precio final $" + precioPromo);
        paquete.precio = precioPromo;
        paquete.promocion = "Promo " + 2 + " personas.";
        //console.log(paquete);
        //console.log(carrito);


    } else if (personas.value >= 1) {
        let resultado = personas.value * precioIndividual;
      //  console.log(resultado);
        carrito.push("Monto a pagar $" + resultado);
        paquete.precio = resultado;
       // console.log(paquete);
       // console.log(carrito);
=======
        console.log(personas.value);
        carrito.push("Precio final $" + precioPromo);
        paquete.precio = precioPromo;
        paquete.promocion = "Promo " + 2 + " personas.";



    } else if (personas.value >= 1) {
        let resultado = personas.value * precioIndividual;

        carrito.push("Monto a pagar $" + resultado);
        paquete.precioUnidad = resultado;

>>>>>>> 0379e05aa9800c630c3232fd33a5ff02fdc55254


    }


    for (let i = 0; i < carrito.length; i += 1) {
        console.log(carrito[i]);
    }
    for (item in paquete) {
        console.log(item);
    }
}





function destinos(evt) {


    evt.preventDefault();
    const destino = document.querySelector("#destino");
    paquete.lugar = destino.value;
    localStorage.setItem("paquete", JSON.stringify(paquete));




    //console.log(destino);
    //console.log(destino.value);
    let plaza = destino.value.toLowerCase()

    switch (plaza) {
        case "Mendoza":
            calcularPrecio(20000, 13000);
            break;

        case "Jujuy":
            calcularPrecio(40000, 25000);
            break;
        case "San Luis":
            calcularPrecio(50000, 30000);
            break;
        case "El Bolson":
            calcularPrecio(60000, 35000);
            break;
        case "Mar del Plata":
            calcularPrecio(25000, 15000);
            break;
        case "Tierra del Fuego":
            calcularPrecio(70000, 40000);
            break;
        case "Bariloche":
            calcularPrecio(65000, 45000);
            break;
        case "Tucuman":
            calcularPrecio(35000, 18000);
            break;

        default:
<<<<<<< HEAD
            //console.log("Operacion cancelada");


    }
    



btn.addEventListener("click", function () {
    

    

    formulario.innerHTML =
        `
=======
        //console.log("Operacion cancelada");


    }




    btn.addEventListener("click", function () {




        formulario.innerHTML =
            `
>>>>>>> 0379e05aa9800c630c3232fd33a5ff02fdc55254
    <div id="contenedor2">   

        <div id="caja2">

            <ul>
                
                <li>Destino: ${plaza}</li>
                <li>Personas: ${personas.value}</li>
<<<<<<< HEAD
                <li>Precio: ${carrito}</li>
=======
           //undefined     <li>Precio: ${paquete.precio}</li> //undefined
>>>>>>> 0379e05aa9800c630c3232fd33a5ff02fdc55254
                

            </ul>

        </div>

        <form id="formulario2">
        
            <div id="caja4">
                <label id="letra" for="numeroDeTarjeta">Tarjeta</label>
                <input type="number" id="numeroDeTarjeta" placeholder="N° de Tarjeta" required>

                <label id="letra"  for="Nombre">Nombre</label>
                <input type="text" id="nombre" placeholder="Nombre que aparece en la tarjeta " required>
                
                <label id="letra"  for="fecha">Fecha</label>
                <input type="number" id="fecha" placeholder="Fecha de vencimiento" required>
                
                
                <label id="letra"  for="dni">D.N.I</label>
                <input type="number" id="dni" placeholder="Introduzca el D.N.I" required>


                
                
                

                <input id="btn2" type="submit" value ="Pagar">
                <input id="btn3" type="reset" value ="Cancelar">
                
            </div>
        
        
            
        
        </form>

    </div>
        `


<<<<<<< HEAD
})
=======
    })
>>>>>>> 0379e05aa9800c630c3232fd33a5ff02fdc55254
}
