//Crea una lista vacía llamada "listaGenerica".

let listaGenerica = [];

//Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let listaDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

//Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
listaDeProgramacion.push('Java', 'Ruby', 'GoLang');

//Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
verListaProgramacion(listaDeProgramacion);
verListaInversa(listaDeProgramacion);
function verListaProgramacion(listaDeProgramacion) {
    console.log(listaDeProgramacion);
}

//Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
function verListaInversa(listaDeProgramacion) {
    console.log(listaDeProgramacion.reverse())
}

//Crea una función que calcule el promedio de los elementos en una lista de números.

let listaNumeros = [3, 3, 2, 3, 3, 3, 5];
let promedio = calcularPromedio(listaNumeros);
console.log(promedio);
function calcularPromedio(arr) {
    let suma = 0;
    arr.forEach(numero => suma += numero);
    return suma / listaNumeros.length;
}

//Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
numeroMasGrandeMasPequeño(listaNumeros);
function numeroMasGrandeMasPequeño(arr) {
    let listaOrdenada = arr.toSorted((a, b) => a - b);
    console.log("tamaño lista: " + listaOrdenada.length);
    console.log(listaOrdenada[0]);
    console.log(listaOrdenada[listaOrdenada.length - 1]);

}
//Crea una función que devuelva la suma de todos los elementos en una lista.
function suma(lista) {
    let suma = 0;
    lista.forEach(numero => suma += numero);
    return suma;

}


//Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
let listaNumeros2 = [7, 6, 5, 4, 3, 2, 1];
let listaSumada = [];
sumaListas(listaNumeros, listaNumeros2);
console.log("lista sumada " +listaSumada);

function sumaListas(lista, lista2) {
    for (let i = 0; i <= lista.length-1; i++) {
        let resultadoSuma = 0;
        console.log(lista[i]);
        console.log(lista2[i]);
        resultadoSuma = lista[i] + lista2[i];
        listaSumada.push(resultadoSuma);
    }
}
//Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.

console.log("lista nueva con el cuadrado de cada numero: " + cuadradoDeCadaNumero(listaNumeros))
console.log("lista usada: " + listaNumeros)

function cuadradoDeCadaNumero(lista) {
    let numerosCuadrado = [];
    let cuadrado = 0;
    lista.forEach(numero => {
        cuadrado = numero * numero;
    numerosCuadrado.push(cuadrado);
    }
    );
    return numerosCuadrado;
}



/*
let intentos = 1;
let numeroMaximo = 10;
let numeroRandom = generarNumeroRandom(numeroMaximo);
let listaNumerosSorteados = [];
console.log(numeroRandom);

function asignarTextoElemento(texto, etiqueta) {
    let titulo = document.querySelector(etiqueta);
    titulo.innerHTML = texto;
}

function verificarIntento() {

    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    // usar el === valida que sea el mismo valor y mismo tipo de dato
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

function limpiarCaja() {
    document.querySelector("#valorUsuario").value = "";
}

function generarNumeroRandom(numeroMaximo) {
    let numeroGenerado = Math.floor((Math.random() * numeroMaximo) + 1);

    if (listaNumerosSorteados.length === numeroMaximo) {
        reiniciarJuego();
    } else {
        validarNumerosSorteados(numeroMaximo, numeroGenerado);
    }

}

function validarNumerosSorteados(numeroMaximo, numeroGenerado) {
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroRandom(numeroMaximo);
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
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
*/