/* POO - Programacion orientada a objetos*/
/* Objetos */
/* nombre - apellido - domicilio - usuario - contraseña */
// claves : Valores - Propiedades
// nombre: "Andres" - Propiedad

/* const auto = {
  marca: "Fiat",
  modelo: "Toro",
  anio: 2020,
  puertas: 4,
  baul: true,
  ruedas: 4,
  dueños: 1,
};
 */

/* const persona = {
  nombre: "Andres",
  apellido: "Perlo",
  edad: 30,
  tyc: true,
  domicilio: {
    pais: "Argentina",
    provincia: "Tucuman",
    localidad: "San Miguel de Tucuman",
    cp: "4000",
    barrio: "Sur",
  },
  pasatiempos: ["Ir al parque", "Jugar videojuegos", "comer asado"],
}; */
/* 
console.log(persona); */

/* Obtener propiedad */
/* objeto[clave] */
/* console.log(persona["nombre"]); */
/* objeto.clave */
/* console.log(persona.apellido); */

/* Agrego o editar una  nueva propiedad */
/* objeto.clave = nuevoValor */
/* persona.nombre = "Juan";
persona.sexo = "Masculino";

console.log(persona); */

/* Elimiar una propiedad */
/* delete objeto.clave */

/* delete persona.nombre;
console.log(persona); */

/* const auto = {
  marca: "Fiat",
  modelo: "Toro",
  anio: 2020,
  puertas: 4,
  // Metodo = Funcion
  encendido: false,
  encenderApagar: function () {
    if (this.encendido) {
      this.encendido = false;
      console.log("auto apagado");
    } else {
      this.encendido = true;
      console.log("auto encendido");
    }
  },
}; */

/* for In */

/* for (const clave in persona) {
  if (
    typeof persona[clave] !== "object" &&
    typeof persona[clave] !== "boolean"
  ) {
    console.log(persona[clave]);
  }
} */

/* Arrays de Objetos */

/* const productos = [
  {
    id: 1,
    titulo: "Coca-Cola",
    imagen: "url",
    precio: 2000,
    descripcion: "la mejor del mundo",
  },
  {
    id: 2,
    titulo: "Pepsi",
    imagen: "url",
    precio: 1500,
    descripcion: "la segunda mejor del mundo",
  },
  {
    id: 3,
    titulo: "Manaos",
    imagen: "url",
    precio: 1000,
    descripcion: "la mejor de argentina",
  },
]; */

//console.log(productos);

/* console.log(new Date());
const meses = [
  "Enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];

const dias = [
  "domingo",
  "lunes",
  "martes",
  "Miercoles",
  "jueves",
  "viernes",
  "sabado",
]; */
/* const fechaActual = new Date();
const posicionDelDia = fechaActual.getDay();
const posicionDelMes = fechaActual.getMonth();
const diaAlmanaque = fechaActual.getDate();
const anioActual = fechaActual.getFullYear();
const horaActual = fechaActual.getHours();
const minutoActual = fechaActual.getMinutes();
const segundoActual = fechaActual.getSeconds(); */

/* console.log(dias[posicionDelDia]);
console.log(meses[posicionDelMes]);
console.log(diaAlmanaque);
console.log(anioActual);
console.log(horaActual);
console.log(minutoActual);
console.log(segundoActual); */

/* const fechaTraducidaEspanioArg = `Hoy es ${dias[posicionDelDia]} ${diaAlmanaque} de ${meses[posicionDelMes]} del año ${anioActual}. Son las ${horaActual <= 9 ? `0${horaActual}` : horaActual}:${minutoActual <= 9 ? `0${minutoActual}` : minutoActual}:${segundoActual}`;

console.log(fechaTraducidaEspanioArg); */

/* ternario */

/* horaActual <=9 ? `0${horaActual}` : horaActual 
minutoActual <= 9 && `0${horaActual}`; */

const productos = [
  {
    id: 1,
    titulo: "Coca-Cola",
    imagen: "url",
    precio: 2000,
    descripcion: "la mejor del mundo",
    bloqueo: false,
  },
  {
    id: 2,
    titulo: "Pepsi",
    imagen: "url",
    precio: 1500,
    descripcion: "la segunda mejor del mundo",
    bloqueo: false,
  },
  {
    id: 3,
    titulo: "Manaos",
    imagen: "url",
    precio: 1000,
    descripcion: "la mejor de argentina",
    bloqueo: false,
  },
];

/* CRUD o ABM */
/* 
C - Create - Crear
R - Read - Leer
U - Update - Actualizar
D - Delete - Eliminar - Logica - Fisica - CONFIRMACION

A - Alta
B - Baja - Logica - Fisica - CONFIRMACION
M - Modificacion

*/

/* Tienen que crear 5 funciones para el CRUD COMPLETO */

const crearNuevoProduto = () => {};

const obtenerInfoProducto = (idProducto) => {};

const actualizarProducto = (idProducto) => {};

const eliminarFisicamenteUnProducto = (idProducto) => {};

const eliminarLogicamenteUnProducto = (idProducto) => {};
