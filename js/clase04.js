let saldo = 100000;

function salir() {
    alert("Fin del proceso");
}



function retirarDinero(monto) {
    if (monto > saldo) {
        alert("saldo insuficiente")
    } else {
        saldo -= monto;
        console.log(monto);
    }
    seleccionarOperacion();
}



function consultarSaldo() {
    alert("su saldo es " + saldo);
    seleccionarOperacion();
}



function seleccionarOperacion() {
    console.log("1: Consulta de saldo");
    console.log("2: retirar dinero");
    console.log("3: salir");


    let operacion = prompt("ingresar la operacion")
    switch (operacion) {
        case "1":
            consultarSaldo();
            break;
        case "2":
            let monto = Number(prompt("Ingrese monto a retirar"));
            retirarDinero(monto);
            break;

        case "3":
            salir();
            break;

        default:
            
            alert("Operacion invalida")
            console.log("operacion invalida")
            seleccionarOperacion()
    }
}



function validarClave(clave) {
    if (clave === 1234) {
        seleccionarOperacion();
    } else {
        alert("Contraseña incorrecta");
    }
}




function ingresarClave(tarjeta) {
    if (tarjeta) {
        let clave = Number(prompt("Ingresar clave"));
        validarClave(clave);
    } else {
        alert("Introduzca la tarjeta");
        ingresarAlCajero();
    }
}



function ingresarAlCajero() {
    let tarjeta = confirm("Ingrese la tarjeta");

    ingresarClave(tarjeta);
}



ingresarAlCajero();


