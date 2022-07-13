let formulario = document.getElementById("formulario");
let inputNombre = document.getElementById("inputName");
let inputCorreo = document.getElementById("inputEmail");
let inputContrasenia = document.getElementById("inputPassword");
let inputRepetirContrasenia = document.getElementById("inputPasswordRepeat");

let registros = [];

class Registros {
    constructor(nombre, correo, contrasenia, contrasenia2) {
        this.nombre = nombre.toUpperCase();
        this.correo = correo;
        this.contrasenia = contrasenia;
        this.contrasenia2 = contrasenia2;
    }
}

formulario.onsubmit = (event) => validarFormulario (event);

function validarFormulario (event) {
    event.preventDefault();
    let nombre = inputNombre.value;
    let correo = inputCorreo.value;
    let contrasenia = inputContrasenia.value;
    let contrasenia2 = inputRepetirContrasenia.value;

    let registro = new Registros(nombre, correo, contrasenia, contrasenia2)
    registros.push(registro)

    inputNombre.value = "";
    inputCorreo.value = "";
    inputContrasenia.value = "";
    inputRepetirContrasenia.value = "";

    console.log(registros);

    /*
    console.log(event.target);
    console.log(inputNombre.value)
    console.log(inputCorreo.value)
    console.log(inputContrasenia.value)
    console.log(inputRepetirContrasenia.value)
    */
    alert("Registro exitoso!")
}