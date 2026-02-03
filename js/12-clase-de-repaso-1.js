/* import { registrarUsuarios } from "./13-ej-funcion"; */


//Realiza un script que pida una cadena de texto
//const frase = prompt("Ingresa un texto")

/* let resultadoCadenaDeTexto = ""

for (let index = 0; index < frase.length; index++) {
  const letra = frase[index]
  resultadoCadenaDeTexto += letra + "-"
}

console.log(resultadoCadenaDeTexto) */

/* segunda solucion - split - */

//join
/* const frase = prompt("Ingresa un texto")
console.log(frase.split("").join("-")) */

/* 
17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

*/

/* const frase = prompt("Ingresa un texto").toLowerCase()
let posicionEncontradaDeLaPrimeraVocal = false


for (let index = 0; index < frase.length; index++) {
  const letra = frase[index];
  if (!posicionEncontradaDeLaPrimeraVocal) {
    switch (letra) {
      case "a":
        console.log(`la posicion de la primera vocal es: ${index}`)
        posicionEncontradaDeLaPrimeraVocal = true
        break;
      case "e":
        console.log(`la posicion de la primera vocal es: ${index}`)
        posicionEncontradaDeLaPrimeraVocal = true
        break;
      case "i":
        console.log(`la posicion de la primera vocal es: ${index}`)
        posicionEncontradaDeLaPrimeraVocal = true
        break;
      case "o":
        console.log(`la posicion de la primera vocal es: ${index}`)
        posicionEncontradaDeLaPrimeraVocal = true
        break;
      case "u":
        console.log(`la posicion de la primera vocal es: ${index}`)
        posicionEncontradaDeLaPrimeraVocal = true
        break;
    }

  }
}
 */


/* 
5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99.999.999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».



*/

/* let numeroDeDni = prompt("Ingresa tu dni")
const letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"]



while (numeroDeDni !== null) {
  if (!isNaN(Number(numeroDeDni))) {
    if (Number(numeroDeDni) <= 99999999) {
      const resultado = Math.round(Number(numeroDeDni) % 23)
      console.log(resultado)
      console.log(letras[resultado])

    }
    numeroDeDni = prompt("Ingresa tu dni")
    console.log(numeroDeDni)
  } else {
    numeroDeDni = prompt("Ingresa tu dni")
    console.log(numeroDeDni)
  }

} */


/* const arrayNombres = ["andres", "fede"]

console.table(arrayNombres) */

/* registrarUsuarios("andres", "perlo", "andres2026", "123456789") */