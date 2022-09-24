function numeroDeTarjeta(numero) {
    if (numero === 12345678912) {
        alert("pago realizado");

    } else {
        alert("Numero de tarjeta invalido");
    }
}

function Tarjeta(tarjeta) {
    if (tarjeta) {
        let numero = Number(prompt("Ingresar numero"));
        numeroDeTarjeta(numero);
    } else {
        alert("Introduzca la tarjeta");
        
    }
}



function ingresarTarjeta() {
    let tarjeta = confirm("Ingrese la tarjeta");

    Tarjeta(tarjeta);
}



function salir() {
    alert("Proceso terminado")
}




function tucuman() {
    let preciopromo = 250000
    let precioIndividual = 16000;
    alert("Usted elgio el destino a Tucuman, promocion para dos personas");
    let personas = Number(prompt("Ingrese la catidad de personas"));
    if (personas === 2) {
        confirm("Promocion para dos personas " + "$" + preciopromo + " ¿decea confirmar?");
        console.log(preciopromo);
        ingresarTarjeta()
    } else if (personas >= 1) {
        let resultado = personas * precioIndividual;
        confirm("Precio de su destino " + resultado + " ¿decea confirmar?");
        
        console.log(resultado);
        ingresarTarjeta()


    } else {
        salir();
    }
}

function bariloche() {
    let preciopromo = 300000
    let precioIndividual = 18000;
    alert("Usted elgio el destino a Bariloche, promocion para dos personas");
    let personas = Number(prompt("Ingrese la catidad de personas"));
    if (personas === 2) {
        confirm("Promocion para dos personas " + "$" + preciopromo + " ¿decea confirmar?");
        console.log(preciopromo);
        ingresarTarjeta()
    } else if (personas >= 1) {
        let resultado = personas * precioIndividual;
        confirm("Precio de su destino " + "$" + resultado + " ¿decea confirmar?");
        ingresarTarjeta();
        console.log(resultado);
    


    } else {
        
        salir();
    }
}





function tierraDelFuego() {
    let preciopromo = 40000
    let precioIndividual = 25000;
    alert("Usted elgio el destino a Tierra Del Fuego, promocion para dos personas");
    let personas = Number(prompt("Ingrese la catidad de personas"));
    if (personas === 2) {
        confirm("Promocion para dos personas " + "$" + preciopromo + " ¿decea confirmar?");
        console.log(preciopromo);
        ingresarTarjeta()
    } else if (personas >= 1) {
        let resultado = personas * precioIndividual;
        confirm("Precio de su destino " + resultado + " ¿decea confirmar?");
        console.log(resultado);
        ingresarTarjeta()


    } else {
        salir();
    }
}




function marDelPlata() {
    let preciopromo = 25000;
    let precioIndividual = 15000;
    alert("Usted elgio el destino a Mar Del Plata, promocion para dos personas");
    let personas = Number(prompt("Ingrese la catidad de personas"));
    if (personas === 2) {
        confirm("Promocion para dos personas " + "$" + preciopromo + " ¿decea confirmar?");
        console.log(preciopromo);
        ingresarTarjeta()
    } else if (personas >= 1) {
        let resultado = personas * precioIndividual;
        confirm("Precio de su destino " + resultado + " ¿decea confirmar?");
        console.log(resultado);
        ingresarTarjeta()


    } else {
        salir();
    }
}




function elBolson() {
    let preciopromo = 30000;
    let precioIndividual = 19000;
    alert("Usted elgio el destino a El Bolson, Rio Negro. Promocion para dos personas");
    let personas = Number(prompt("Ingrese la catidad de personas"));
    if (personas === 2) {
        confirm("Promocion para dos personas " + "$" + preciopromo + " ¿decea confirmar?");
        console.log(preciopromo);
        ingresarTarjeta()
    } else if (personas >= 1) {
        let resultado = personas * precioIndividual;
        confirm("Precio de su destino " + resultado + " ¿decea confirmar?");
        console.log(resultado);
        ingresarTarjeta()


    } else {
        salir();
    }
}





function cordoba() {
    let preciopromo = 25000;
    let precioIndividual = 18000;
    alert("Usted elgio el destino a San Luis, Cordoba. Promocion para dos personas");
    let personas = Number(prompt("Ingrese la catidad de personas"));
    if (personas === 2) {
        confirm("Promocion para dos personas " + "$" + preciopromo + " ¿decea confirmar?");
        console.log(preciopromo);
        ingresarTarjeta()
    } else if (personas >= 1) {
        let resultado = personas * precioIndividual;
        confirm("Precio de su destino " + resultado + " ¿decea confirmar?");
        console.log(resultado);
        ingresarTarjeta()


    } else {
        salir();
    }
}





function jujuy() {
    let preciopromo = 40000;
    let precioIndividual = 16000;
    alert("Usted elgio el destino a Jujuy, promocion para cuatro personas");
    let personas = Number(prompt("Ingrese la catidad de personas"));
    if (personas === 4) {
        confirm("Promocion para cuatro personas " + "$" + preciopromo + " ¿decea confirmar?");
        console.log(preciopromo);
        ingresarTarjeta()
    } else if (personas >= 1) {
        let resultado = personas * precioIndividual;
        confirm("Precio de su destino " + resultado + " ¿decea confirmar?");
        console.log(resultado);
        ingresarTarjeta()


    } else {
        salir();
    }



}






function mendoza() {
    let preciopromo = 20000;
    let precioIndividual = 13000;
    alert("Usted elgio el destino a Mendoza, promocion para dos personas");
    let personas = Number(prompt("Ingrese la catidad de personas"));
    if (personas === 2) {
        confirm("Promocion para dos personas " + "$" + preciopromo + " ¿decea confirmar?");
        console.log(preciopromo);
        ingresarTarjeta()
    } else if (personas >= 1) {
        let resultado = personas * precioIndividual;
        confirm("Precio de su destino " + resultado + " ¿decea confirmar?");
        console.log(resultado);
        ingresarTarjeta()


    } else {
        salir();
    }
}






function destinos() {
    console.log("1: Mendoza.");
    console.log("2: Jujuy.");
    console.log("3: San Luis, Cordoba.");
    console.log("4: El Bolson, Rio negro.");
    console.log("5: Mar Del Plata, Buenos Aires.");
    console.log("6: Tierra del Fuego.");
    console.log("7: Bariloche, Rio Negro.");
    console.log("8: Tucuman.");
    console.log("9: Cancelar la operacion.");

    let destinosTuristicos = prompt("Ingrese la opcion para su destino.")

    switch (destinosTuristicos) {
        case "1":
            mendoza();
            break;

        case "2":
            jujuy();
            break;
        case "3":
            cordoba();
            break;
        case "4":
            elBolson()
            break;
        case "5":
            marDelPlata();
            break;
        case "6":
            tierraDelFuego();
            break;
        case "7":
            bariloche();
            break;
        case "8":
            tucuman();
            break;
        case "9":
            salir();
            break;
        default:
            alert("Operacion cancelada");
            console.log("Operacion cancelada");



    }

}



destinos();


















