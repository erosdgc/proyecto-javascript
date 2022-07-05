/*
const catalogo = [track1, track2, track3, track4]

let track1 = {nombre: "Kalpa", velocidad: "120 BPM", genero: "Progressive House"}
let track2 = {nombre: "The Adventurer", velocidad: "122 BPM", genero: "Progressive House"}
let track3 = {nombre: "Wandering Souls", velocidad: "124 BPM", genero: "Melodic House & Techno"}
let track4 = {nombre: "Out of Alignment", velocidad: "124 BPM", genero: "Melodic House & Techno"}

const cualidadArchivos = [WAV, AIFF, FLAC, MP3, M4A]

let WAV = {formato: "sin pérdidas", tipo: "sin compresión", precio: 2.5}
let AIFF = {formato: "sin pérdidas", tipo: "sin compresión", precio: 2.5}
let FLAC = {formato: "sin pérdidas", tipo: "sin compresión", precio: 2.5}
let MP3 = {formato: "con pérdidas", tipo: "comprimido", precio: 2}
let M4A = {formato: "con pérdidas", tipo: "comprimido", precio: 1.5}
*/
elegirTrack()

const tracks = [
    { id: 1, artista: "Eros David", nombre: "Wandering Souls", genero: "Melodic House & Techno", anio: 2020},
    { id: 2, artista: "Eros David", nombre: "Pillars of Creation", genero: "Melodic House & Techno", anio: 2022},
    { id: 3, artista: "Eros David", nombre: "Visionaries", genero: "Organic House / Downtempo", anio: 2022},
    { id: 4, artista: "Eros David", nombre: "The Adventurer", genero: "Progressive House", anio: 2022},
    { id: 5, artista: "Eros David", nombre: "Kalpa", genero: "Progressive House", anio: 2022},
    { id: 6, artista: "Eros David", nombre: "Out of Alignment", genero: "Melodic House & Techno", anio: 2021}
];

class Formato {
    constructor (id, formato, tipo, precio) {
        this.id = id
        this.formato = formato
        this.tipo = tipo
        this.precio = precio
    }
}

const formatos = Formato [
    { id: 1, formato: ".WAV", tipo: "no comprimido, sin pérdidas.", precio: 2.5},
    { id: 2, formato: ".AIFF", tipo: "no comprimido, sin pérdidas.", precio: 2.5},
    { id: 3, formato: ".FLAC", tipo: "no comprimido, sin pérdidas.", precio: 2.5},
    { id: 4, formato: ".MP3", tipo: "comprimido.", precio: 2},
    { id: 5, formato: ".M4A", tipo: "comprimido", precio: 1.75}
];

for (const compra of formatos) {
    console.log(compra.id);
    console.log(compra.formato);
    console.log(compra.tipo);
    console.log(compra.precio);
}

function elegirTrack(){
    let opcionTrack = prompt('¿Qué pista desea descargar? \n Escribe 1 para descargar "Wandering Souls" de Eros David \n Escribe 2 para descargar "Pillars of Creation" de Eros David \n Escribe 3 para descargar "Visionaries" de Eros David \n Escribe 4 para descargar "The Adventurer" de Eros David \n Escribe 5 para descargar "Kalpa" de Eros David \n Escribe 6 para descargar "Out of Alignment" de Eros David \n 0 si desea cancelar la compra.')
    if (opcionTrack == 1 || opcionTrack == '1') {
        alert ('Ha seleccionado "Wandering Souls" de Eros David')
        elegirCalidad ()
    }
    else if (opcionTrack == 2 || opcionTrack == '2') {
        alert ('Ha seleccionado "Pillars of Creation" de Eros David')
        elegirCalidad ()
    }
    else if (opcionTrack == 3 || opcionTrack == '3') {
        alert ('Ha seleccionado "Visionaries" de Eros David')
        elegirCalidad ()
    }
    else if (opcionTrack == 4 || opcionTrack == '4') {
        alert ('Ha seleccionado "The Adventurer" de Eros David')
        elegirCalidad ()
    }
    else if (opcionTrack == 5 || opcionTrack == '5') {
        alert ('Ha seleccionado "Kalpa" de Eros David')
        elegirCalidad ()
    }
    else if (opcionTrack == 6 || opcionTrack == '6') {
        alert ('Ha seleccionado "Out of Alignment" de Eros David')
        elegirCalidad ()
    }
    else if (opcionTrack == 0 || opcionTrack == '0') {
        return;
    }
    else {
        alert('No ha registrado una opción válida. Debe seleccionar una para continuar o 0 si desea salir.')
        elegirTrack()
    }
}
elegirTrack()

function elegirCalidad(){
    let opcionCalidad = prompt('¿En qué calidad de audio te gustaría comprar esta canción? \n Escribe 1 para .WAV \n Escribe 2 para .AIFF \n Escribe 3 para .FLAC \n Escribe 4 para .MP3 \n Escribe 5 para .M4A \n 0 si desea cancelar la compra.')
    if (opcionCalidad == 1 || opcionCalidad == '1') {
        alert ('Ha seleccionado la calidad en formato .WAV')
        sumarTrack()
    }
    else if (opcionCalidad == 2 || opcionCalidad == '2') {
        alert ('Ha seleccionado la calidad en formato .AIFF')
        sumarTrack()
    }
    else if (opcionCalidad == 3 || opcionCalidad == '3') {
        alert ('Ha seleccionado la calidad en formato .FLAC')
        sumarTrack()
    }
    else if (opcionCalidad == 4 || opcionCalidad == '4') {
        alert ('Ha seleccionado la calidad en formato .MP3')
        sumarTrack()
    }
    else if (opcionCalidad == 5 || opcionCalidad == '5') {
        alert ('Ha seleccionado la calidad en formato .M4A')
        sumarTrack()
    }
    else if (opcionCalidad == 0 || opcionCalidad == '0') {
        elegirTrack()
    }
    else {
        alert('No ha registrado una opción válida. Debe seleccionar una para continuar o 0 si desea volver al menú anterior.')
        elegirCalidad()
    }
}
// elegirCalidad()

function sumarTrack(){
    let otraPista = prompt('¿Desea descargar otra pista? (SI/NO)')
    let respuestaOtra = otraPista.toUpperCase()
    if(respuestaOtra == 'SI'){
        elegirTrack()
    }
    else if(respuestaOtra == 'NO'){
        alert(`Su carrito es de: \n ${JSON.stringify(carrito)}`)
        const total = carritoCompleto()
        alert('¡Gracias por su compra!')
        pay()
    }
    else{
        alert('Ingrese una opción valida.')
        sumarTrack()
    }
}

// Carrito
const carrito = []

// Carrito completo
function carritoCompleto(){
    return carrito.reduce((acc, el) => acc + el.precio, 0)
}

// Pago
let metodosPago = ["DEBITO", "TRANSFERENCIA", "CREDITO"]

function pay() {
    let payment = prompt("Seleccione un método de pago:\nEscriba 1 para pagar con transferencia (10% de descuento)\nEscriba 2 para pagar con tarjeta de crédito (monto variable).\n0 para ir al menú anterior.")
    if(payment == 1 || payment == '1') {
        alert('Ha seleccionado Transferencia. Tiene un 10% de descuento')
        const total = carritoCompleto()
        const precioConTransferencia = Math.round(total*.9)
        alert(`Su total es de: $${precioConTransferencia}`)
    }
    else if (payment == 2 || payment == '2') {
        alert("Ha seleccionado tarjeta de crédito. Se debitará el total en 1 cuota.")
        const total = totalCarrito()
        const precioConTarjeta = total
        alert(`Su total es de: $${precioConTarjeta}`)
    }
    else if (payment == 0 || payment == '0') {
        sumarTrack()
    }
    else {
        alert ("No ha registrado una opción válida. Debe seleccionar una para continuar.")
        pay()
    }
}


/*
// Calcular ahora el precio total de la compra. Previamente hacer un carrito con la suma de todos.
for (const precioTotal of elegirFormato) {
    console.log(precioTotal.id);
    console.log(precioTotal.precio);
}

class copiaDigital {
    constructor(artista, nombre, precio, formato) {
        this.artista = artista.toUpperCase()
        this.nombre = nombre
        this.precio = precio
        this.cantidad = cantidad
    }
}

function copiasAgregadas(){
    let numeroCopias = parseInt(prompt("¿Qué copias vas a llevar?"))
    let copias = []
    console.log(copias)
    return copias
    }

function mostrarCopias(copias){
    for(const copiaDigital of copias){
        console.log(copiaDigital)
        console.log(copiaDigital.nombre)
    }
}

function calcularCosto(copias){
    let sumatoriaCosto = 0;
    for (const copiaDigital of copias) {
        sumatoriaCosto = copiaDigital.calcularCosto();
    }
    return sumatoriaCosto
}

function main(){
    let copias = agregarCopia()
    mostrarCopias(copias)
    alert("El costo total de las copias es: " + calcularCosto(copias))
}
main();
*/




