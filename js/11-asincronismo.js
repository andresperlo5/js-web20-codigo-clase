
//
/* setTimeout(() => {
  console.log("funcion de tiempo")
}, 1000);

(
  () => {
    console.log("funcion IIFE")
  }
)()

console.log("Fuera de la IIFE") */

/* Promesa */

const baseDeDato = [1]

const promesa = new Promise((resolve, reject) => {
  if (baseDeDato.length) {
    resolve("La imagen esta en la base de datos")
  } else {
    reject("La imagen no existe")
  }
})

/* then/catch */
/* then =  resolve = promesa se cumplio
   catch = reject = promesa no se cumple
*/

promesa
  .then((res) => console.log(res))
  .catch((res) => console.log(res))