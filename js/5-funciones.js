/* Funciones o Metodo*/
//alert("Gracias por tu registro");
//confirm("Estas seguro de quieres eliminar este documento?");

/* Declarativas - por que lleva un nombre*/
/* function nombreDeLaFuncion(parametros o argunmentos){

} */

//alert("hola desde afuera de la funcion");
/* 
function mostrarMensaje() {
  alert("Hola desde una funcion");
} */

//mostrarMensaje(); - se la invoca a la funcion

/* Anonima - no tiene nombre */
/* const mostrarMensajeAnonima = function () {
  alert("Hola desde una funcion anonima");
};

const sumar = function () {
  return 3 + 5;
};
 */
//console.log(sumar());

/* Arrow Function - Funcion Flecha - Anonima */
/* const resta = () => {
  return 5 - 3;
}; */

//console.log(resta());

//IIFE - funciones que se llaman a si mismas

/* (() => {
  console.log("Hola desde una IIFE");
})(); */

// llamar a una funcion dentro de otra

/* const saludar = () => {
  alert("Hola desde una funcion");
};

const inicioDeSesion = () => {
  saludar();
};
 */
/* Ambiente Global */
/* const numero1 = 10; */

/* const division = () => { */
/* Scope - Ambiente Local */
/*   const div = 2;
  console.log(numero1 / div);
}; */
/* 
const nombre = "Andres";

if (nombre) {
  console.log(nombre);
} */

/* const nombre = prompt("ingrese su nombre");
const apellido = prompt("ingrese su apellido");
const dni = prompt("ingrese su dni");
const domicilio = prompt("ingrese su domicilio");
const email = prompt("ingrese su email");
const usuario = prompt("ingrese su usuario");
const contrasenia = prompt("ingrese su contraseña");
const edad = prompt("ingrese su edad"); */

/* const registro = (
  nombre = "",
  apellido = "",
  dni = "",
  domicilio = "",
  email = "",
  usuario = "",
  contrasenia = "",
  edad = 0
) => { */
/* nombre - apellido - dni - domicilio - email - usuario - contraseña */
/*   console.log(nombre);
  console.log(apellido);
  console.log(dni);
  console.log(domicilio);
  console.log(email);
  console.log(usuario);
  console.log(contrasenia);
  console.log(edad);
}; */

/* 
Argumentos - Estaticos
registro(
  "Andres",
  "Perlo",
  "37777899",
  "lastenia",
  "usario@usuario.com",
  "usuario2026",
  "123456789"
);
 */

/* Parametros - Dinamicos */
/* registro(nombre, apellido, dni, domicilio, email, usuario, contrasenia); */

/* Callbacks */

/* const saludar = () => {
  alert("hola");
};

const inicioDeSesion = (funcionSaludar) => {
  funcionSaludar();
};

inicioDeSesion(saludar); */

/* const reinicioDeJuego = () => {
  comienzoDeJuego();
};

const obtenerNumeroAleatorio = () => {
  const numeroAleatorio = Math.round(Math.random() * 1000);
  console.log(numeroAleatorio);
  return numeroAleatorio;
};

const obtenerNumeroDelUsuario = () => {
  const numeroUsuario = prompt("ingrese un numero del 1 al 1000");
  return Number(numeroUsuario);
};

const comienzoDeJuego = () => {
  const numeroMaquina = obtenerNumeroAleatorio();
  const numeroPersona = obtenerNumeroDelUsuario();

  if (numeroMaquina === numeroPersona) {
    alert("Ganaste sos un genio. Adivinaste el numero");
  } else {
    alert("Sos un perdedor. Das lastima");
  }

  const inicioDeJuego = confirm("Quieres volver a jugar?");

  if (inicioDeJuego) {
    reinicioDeJuego();
  } else {
    alert("Muchas gracias por haber jugado");
  }
};
 */
