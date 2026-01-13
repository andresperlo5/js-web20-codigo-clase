/* Bucles - Codigo repetitivo */
/* while - Mientras*/
/* condicion - contador */

/* const frase = prompt("ingresa una frase");
let contador = 0;

while (contador < 5) {
  document.writeln(frase);
  contador++;
} */

/* let numero = prompt("ingrese un numero");
let resultado = 0;

while (numero !== null) {
  resultado += Number(numero);
  numero = prompt("ingrese un numero");
}

console.log(`El resultado de la suma de todos los numeros es: ${resultado}`); */

/* do while - Hacer mientras*/
/* let numero = prompt("ingrese un numero");
let resultado = 0;

do {
  resultado += Number(numero);
  numero = prompt("ingrese un numero");
} while (numero !== null);
console.log(`El resultado de la suma de todos los numeros es: ${resultado}`); */
/* 
const mensaje = "hola";
let contador = 10;

do {
  document.writeln(mensaje);
  contador++;
} while (contador < 3); */

/* for - Para */
/* for (let contador = 0; contador < 5; contador++) {
  document.writeln("hola");
} */

/* ForIn - For Of - forEach */
/* for (let i = 0; i < 5; i++) { */
/* se va a repetir 5 veces */
/* i = 5 */
/*   for (let j = 0; j < 5; j++) { */
/* j = 5 */
/* se va a repetir 5 veces */
/*   }
} */

/* 

1
22
333
4444
55555
666666
...........30
*/

/* for (let i = 1; i <= 30; i++) {
  for (let j = 1; j <= i; j++) {
    document.writeln(j);
  }
  document.writeln(`<br>`);
} */

/* 
1
12
123
....30

*/

/* let frase = "hola mundo";
   let vocales = "aeiou"

for (let i = 0; i < frase.length; i++) {
  document.writeln(frase[i]);
  includes - booleano
} */
