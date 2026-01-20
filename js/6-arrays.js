/* Arreglos o Arrays */

/* const usuario1 = "Andres";
const usuario2 = "Luis";
const usuario3 = "Myriam"; */

//const usuarios = ["Myriam", "Luis", "Maciel", "Andres"];

/* Metodos que modifican el array original*/

//console.log(usuarios)
/* Obtengo un elemento del array */
//console.log(usuarios[1]);

/* const buscarNombre = prompt("Ingrese un nombre para buscarlo en la BD");
console.log(usuarios.indexOf(buscarNombre)); */

/* Agregar un nuevo elemento al Array - PUSH - splice - unshift */
/* console.log(usuarios);
usuarios.push("Angel"); */

//usuarios.splice(1, 0, "Bautista");// Agrega un nuevo elemento en la posicion asignada
//usuarios.splice(1, 1); //Borra un elemento en particular segun el index que le paso
//console.log(usuarios);
//usuarios.unshift("Abigail"); //Coloca el elemento siempre al principio en la posicion 0
//console.log(usuarios);

/* Elimino un elemento */
//usuarios.splice(1, 0, "Bautista");// Agrega un nuevo elemento en la posicion asignada

//usuarios.pop(); //Elimina el ultimo elemento
//console.log(usuarios);

//usuarios.shift(); //Elimina el primer elemento
//console.log(usuarios);

/*Ordena alfabeticamente el array - sort */

/* console.log(usuarios.sort()); */

/* const numeros = [10, 1, 3, 20, 25, 40, 3];
console.log(numeros.sort((a, b) => a - b)); */

/* reverse */
/* console.log(usuarios.reverse()); */

/* Metodos que NO modifican el array original*/
/* const usuarios = [
  "Andres",
  "Luis",
  "Andres",
  "Myriam",
  "Maciel",
  "Andres",
  "Lautaro",
  "Luciano",
]; */
/* 
const nuevoArrayDeUsuarios = usuarios.slice(0, 2);

console.log(usuarios);
console.log(nuevoArrayDeUsuarios); */

/* const obtenerNombresIguales = usuarios.filter(
  (usuario) => usuario === "Andres"
);
console.log(obtenerNombresIguales); */

/* const obtenerNombresIguales = usuarios.find((usuario) => usuario === "Andres");
console.log(obtenerNombresIguales); */

/* map */

/* const saludoNuevoUsuario = usuarios.map((usuario) => `Hola ${usuario}`);
console.log(saludoNuevoUsuario); */

/* includes */
/* const busquedaDeNombrePorLetra = usuarios.filter((usuario) =>
  usuario.toLowerCase().includes("u")
);

console.log(busquedaDeNombrePorLetra); */

/* const saludoNuevoUsuario = usuarios.map(
  (usuario, i) => `Hola ${i} - ${usuario}`
);
console.log(saludoNuevoUsuario); */

/* FOR - WHILE */

/* const usuarios = [
  "Andres",
  "Luis",
  "Andres",
  "Myriam",
  "Maciel",
  "Andres",
  "Lautaro",
  "Luciano",
]; */

/* const obtenerNombre = (nombreUsuario) => {
  document.writeln(`${nombreUsuario} </br>`);
};

for (let i = 0; i < usuarios.length; i++) {
  const usuario = usuarios[i];
  obtenerNombre(usuario);
} */

//usuarios.forEach((usuario) => document.writeln(`${usuario} </br>`));
