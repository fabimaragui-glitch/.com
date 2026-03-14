let saldoUsuario = 1000;

let billetes = {
    100: 15,
    50: 20,
    20: 30,
    10: 50
};

function agregarNumero(numero) {
    document.getElementById("pantalla").value += numero;
}

function limpiar() {
    document.getElementById("pantalla").value = "";
}

function entregardinero() {

    let pantalla = document.getElementById("pantalla");
    let comprobante = document.getElementById("comprobante");

    let monto = parseInt(pantalla.value);

    if (isNaN(monto) || monto <= 0) {
        alert("Ingrese un monto válido");
        return;
    }

    if (monto > saldoUsuario) {
        alert("Saldo insuficiente en la cuenta");
        return;
    }

    let saldoAnterior = saldoUsuario;
    let restante = monto;
    let detalle = "";

    for (let valor in billetes) {

        valor = parseInt(valor);

        let cantidad = Math.min(
            Math.floor(restante / valor),
            billetes[valor]
        );

        if (cantidad > 0) {
            detalle += cantidad + " x $" + valor + "<br>";
            restante -= cantidad * valor;
            billetes[valor] -= cantidad;
        }
    }

    if (restante === 0) {

        saldoUsuario -= monto;

        let fecha = new Date();
        let operacion = Math.floor(Math.random() * 1000000);

        comprobante.innerHTML =
        "================================<br>" +
        "        BANCO FUTURISTA<br>" +
        "================================<br>" +
        "Fecha: " + fecha.toLocaleDateString() + "<br>" +
        "Hora: " + fecha.toLocaleTimeString() + "<br>" +
        "Operación N°: " + operacion + "<br>" +
        "--------------------------------<br>" +
        "Tipo: RETIRO<br>" +
        "--------------------------------<br>" +
        "Saldo anterior: $" + saldoAnterior + "<br>" +
        "Monto retirado: $" + monto + "<br>" +
        "Saldo actual: $" + saldoUsuario + "<br>" +
        "--------------------------------<br>" +
        "Detalle billetes:<br>" +
        detalle +
        "--------------------------------<br>" +
        "Gracias por usar el cajero<br>" +
        "================================";

    } else {

        comprobante.innerHTML =
        "ERROR: El cajero no tiene suficientes billetes.";
    }

    pantalla.value = "";
}