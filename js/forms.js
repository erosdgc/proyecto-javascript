// Login + Registro

function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

// Cambio de formularios

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        
// AJAX / Fetch (login)

        setFormMessage(loginForm, "Error", "Invalid username/password combination");
    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputError(inputElement, "Username must be at least 10 characters in length");
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});

function registrarUsuario() {
    registros.forEach((registro) => {
        let agregarRegistro = document.createElement();
        agregarRegistro.innerHTML = `
        
        `

    });
}


// Eventos

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

    console.log(event.target);
    console.log(inputNombre.value)
    console.log(inputCorreo.value)
    console.log(inputContrasenia.value)
    console.log(inputRepetirContrasenia.value)

    alert("Registro exitoso!")};