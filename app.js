let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let numeroRandom = generarNumeroRandom(numeroMaximo);

function generarNumeroRandom(numeroMaximo) {
    let numeroGenerado = Math.floor((Math.random() * numeroMaximo) + 1);

    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('Ya se sortearon todos los números posibles', 'p');
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroRandom(numeroMaximo);
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function limpiarCaja() {
    document.querySelector("#valorUsuario").value = "";
}

function asignarTextoElemento(texto, etiqueta) {
    let titulo = document.querySelector(etiqueta);
    titulo.innerHTML = texto;
}

function verificarIntento() {

    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroUsuario === numeroRandom) {

        asignarTextoElemento('Lo adivinaste!, numero de intentos: ' + intentos, 'p');
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {

        if (numeroUsuario < numeroRandom) {
            asignarTextoElemento('El numero secreto es mayor', 'p');
        } else {
            asignarTextoElemento('El numero secreto es menor', 'p');
        }
        intentos++;
        limpiarCaja();
    }

}

function validarNumerosSorteados(numeroMaximo, numeroGenerado) {

}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', true);

}

function condicionesIniciales() {
    numeroRandom = generarNumeroRandom(10);
    asignarTextoElemento('Juego del numero secreto', 'h1');
    asignarTextoElemento('Indica un numero del 1 al ' + numeroMaximo, 'p');
    intentos = 1;
}

condicionesIniciales();
