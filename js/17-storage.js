/* storage - memoria
local - grabar informacion hasta que yo la borre
sesion - grabar informacion hasta que cierro la pestaña o el navegador
*/

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

const crearNuevoProduto = () => {

  const titulo = prompt("Ingrese el nombre del producto")
  const imagen = prompt("Ingrese la imagen del producto")
  const precio = prompt("Ingrese el precio del producto")
  const descripcion = prompt("Ingrese la descripcion del producto")


  /* id: productos.length ? productos[productos.length - 1].id + 1 : 1, */
  const nuevoProducto = {
    id: productos[productos.length - 1]?.id + 1 || 1,
    titulo,
    imagen,
    precio,
    descripcion,
    bloqueo: true,
  }

  productos.push(nuevoProducto)
};

const mostrarProductos = () => {
  productos.forEach((producto) => console.log(producto))
}

/* setItem - creo o modifico 
   getItem - obtener de la memoria (local o sesion) el elemento que necesito
   removeitem - elimina de la memoria (local o sesion) el elemento que no necesito

   clear - borra todos los elementos de la memoria.-
*/
/* localStorage.setItem("nombre", "andres")
sessionStorage.setItem("nombre", "andres") */


/* const convertirArrayDeProductosAString = JSON.stringify(productos)
const nuevoProducto = localStorage.setItem("productos", convertirArrayDeProductosAString)

const obtenerProductoLocalSt = localStorage.getItem("productos")
const convertirStringObjeto = JSON.parse(obtenerProductoLocalSt)
console.log(obtenerProductoLocalSt) */

/* const nuevoProducto = localStorage.setItem("productos", JSON.stringify(productos))
const obtenerProductoLocalSt = JSON.parse(localStorage.getItem("productos"))  */


/* Realizar CRUD la proxima clase 11-02-26 */