



function numeroDeTarjeta(numero) {
    if (numero === 12345678912) {
        alert("pago realizado");


    } else {
        alert("Numero de tarjeta invalido");

    }
}

function nTarjeta(tarjeta) {
    if (tarjeta) {
        let numero = Number(prompt("Ingresar numero"));
        numeroDeTarjeta(numero);
    } else {
        alert("Introduzca la tarjeta");

    }
}



function ingresarTarjeta() {
    let tarjeta = confirm("Ingrese la tarjeta");

    nTarjeta(tarjeta);
}

function salir() {
    alert("Proceso terminado")
}

const carrito = [];
const paquete = {}

function calcularPrecio(lugar, precioPromo, precioIndividual) {
    alert("Usted elgio el destino a " + lugar + ", promocion para dos personas");
    let personas = Number(prompt("Ingrese la catidad de personas"));
    paquete.afluencia = personas;
    if (personas === 2) {
        confirm("Promocion para dos personas " + "$" + precioPromo + " ¿desea confirmar?");
        console.log(precioPromo);
        carrito.push("Precio final $" + precioPromo);
        paquete.precio = precioPromo;
        console.log(paquete);
        console.log(carrito);
        alert("su importe a pagar es de $" + carrito);
        ingresarTarjeta();
    } else if (personas >= 1) {
        let resultado = personas * precioIndividual;
        confirm("Precio de su destino " + resultado + " ¿desea confirmar?");
        console.log(resultado);
        carrito.push("Monto a pagar $" + resultado);
        paquete.precio = resultado;
        console.log(paquete);
        console.log(carrito);
        alert(carrito);
        ingresarTarjeta();

    } else {
        salir();
    }

    for (let i = 0; i < carrito.length; i += 1) {
        console.log(carrito[i]);
    }
    for(item in paquete){
        console.log(item);
    }
}



function destinos() {

    const sitio = prompt(`
    1: Mendoza.
    2: Jujuy.
    3: San Luis.
    4: El Bolson.
    5: Mar Del Plata, Buenos Aires.
    6: Tierra del Fuego.
    7: Bariloche
    8: Tucuman.
    9: Cancelar la operacion.
    Ingrese la opcion para su destino.`)

    let destinosTuristicos = sitio.toLowerCase();
    paquete.lugar = destinosTuristicos;


    switch (destinosTuristicos) {
        case "mendoza":
            calcularPrecio("Mendoza", 20000, 13000);
            break;

        case "jujuy":
            calcularPrecio("Jujuy", 40000, 25000);
            break;
        case "san luis":
            calcularPrecio("San Luis, Cordoba", 50000, 30000);
            break;
        case "el bolson":
            calcularPrecio("El Bolson, Rio Negro", 60000, 35000);
            break;
        case "mar del plata":
            calcularPrecio("Mar del Plata", 25000, 15000);
            break;
        case "tierra del fuego":
            calcularPrecio("Tierra del Fuego", 70000, 40000);
            break;
        case "bariloche":
            calcularPrecio("bariloche, Rio Negro.", 65000, 45000);
            break;
        case "tucuman":
            calcularPrecio("Tucuman", 35000, 18000);
            break;
        case "salir":
            salir();
            break;
        default:
            alert("Operacion cancelada");
            console.log("Operacion cancelada");


    }
}







