/* storage - memoria
local - grabar informacion hasta que yo la borre
sesion - grabar informacion hasta que cierro la pestaña o el navegador
*/

/* const productos = [
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
 */
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
//Base de Datos simulada con el storage
let productosGuardadosEnMemoriaLocal = JSON.parse(localStorage.getItem("productos")) || null

if (!productosGuardadosEnMemoriaLocal) {
  localStorage.setItem("productos", JSON.stringify(productos))
  productosGuardadosEnMemoriaLocal = JSON.parse(localStorage.getItem("productos"))
}

const crearNuevoProdutoDentroDelStorage = () => {

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

  productosGuardadosEnMemoriaLocal.push(nuevoProducto)
  localStorage.setItem("productos", JSON.stringify(productosGuardadosEnMemoriaLocal))
};

const mostrarProductosDelStorage = () => {
  productosGuardadosEnMemoriaLocal.forEach((producto) => console.log(producto))
}

const mostrarProductosDelStorageHabilitados = () => {
  productosGuardadosEnMemoriaLocal.forEach((producto) => {
    if (!producto.bloqueo) {
      console.log(producto)
    }
  })
}

const mostrarProductosDelStorageDeshabilitados = () => {
  productosGuardadosEnMemoriaLocal.forEach((producto) => {
    if (producto.bloqueo) {
      console.log(producto)
    }
  })
}

const mostrarUnProductoDelStorage = (idProducto) => {

  if (!idProducto) {
    alert("ID Incorrecto")
    return
  }



  const productoMostrar = productosGuardadosEnMemoriaLocal.find((producto) => producto.id === idProducto)
  console.log(productoMostrar)
}

const actualizarProductoEnElStorage = (idProducto) => {

  if (!idProducto) {
    alert("ID Incorrecto")
    return
  }



  const obtenerProductoActualizar = productosGuardadosEnMemoriaLocal.find((producto) => producto.id === idProducto)

  const obtenerIndexDelProductoActualizar = productosGuardadosEnMemoriaLocal.findIndex((producto) => producto.id === idProducto)

  const infoActualizar = Number(
    prompt(`Ingresa el numero de lo que quieres actualizar:
    1- Nombre del Producto: ${obtenerProductoActualizar.titulo}
    2- Imagen: ${obtenerProductoActualizar.imagen}
    3- Precio: ${obtenerProductoActualizar.precio}
    4- Descripcion: ${obtenerProductoActualizar.descripcion}
    5- Cambiar la opcion de bloqueo: ${obtenerProductoActualizar.bloqueo ? "Visible" : "No Visible"}
    `
    )
  )

  switch (infoActualizar) {
    case 1:
      const nuevoNombre = prompt("Ingrese un nuevo titulo para el producto")
      obtenerProductoActualizar.titulo = nuevoNombre
      break
    case 2:
      const nuevaImagen = prompt("Ingrese una nueva url para la imagen del producto")
      obtenerProductoActualizar.imagen = nuevaImagen
      break
    case 3:
      const nuevoPrecio = prompt("Ingrese un nuevo precio para el producto")
      obtenerProductoActualizar.precio = nuevoPrecio
      break
    case 4:
      const nuevaDescripcion = prompt("Ingrese una nueva descripcion para el producto")
      obtenerProductoActualizar.descripcion = nuevaDescripcion
      break
    case 5:
      const nuevaOpcionDeBloqueo = prompt("Ingrese la opcion de:'Visible' o 'No Visible' para el producto")
      obtenerProductoActualizar.bloqueo = nuevaOpcionDeBloqueo
      break

    default:
      console.log("Esta opcion no esta disponible")
      break
  }

  productosGuardadosEnMemoriaLocal[obtenerIndexDelProductoActualizar] = obtenerProductoActualizar

  localStorage.setItem("productos", JSON.stringify(productosGuardadosEnMemoriaLocal))
};


const eliminarFisicamenteUnProductoDelStorage = (idProducto) => {

  if (!idProducto) {
    alert("ID Incorrecto")
    return
  }



  const confirmarEliminarUnProducto = confirm("¿Estas seguro de que quieres eliminar este producto? Ten en cuenta que una vez realizada la operacion no tendras marcha atras.")


  if (confirmarEliminarUnProducto) {
    productosGuardadosEnMemoriaLocal.forEach((producto, i) => {
      if (producto.id === idProducto) {
        productosGuardadosEnMemoriaLocal.splice(i, 1)
        localStorage.setItem("productos", JSON.stringify(productosGuardadosEnMemoriaLocal))
      }
    })
  }
}

const eliminarLogicamenteUnProductoDelStorage = (idProducto) => {

  if (!idProducto) {
    alert("ID Incorrecto")
    return
  }


  const confirmarBloqueoLogicoProducto = confirm("¿Estas seguro de que quieres bloquear a este producto?")

  if (confirmarBloqueoLogicoProducto) {
    productosGuardadosEnMemoriaLocal.forEach((producto, i) => {
      if (producto.id === idProducto) {
        producto.bloqueo = true
        localStorage.setItem("productos", JSON.stringify(productosGuardadosEnMemoriaLocal))
      }
    })
  }
};


const activarLogicamenteUnProductoDelStorage = (idProducto) => {

  if (!idProducto) {
    alert("ID Incorrecto")
    return
  }

  const confirmarActivacionLogicaDelProducto = confirm("¿Estas seguro de que quieres activar a este producto?")

  if (confirmarActivacionLogicaDelProducto) {
    productosGuardadosEnMemoriaLocal.forEach((producto, i) => {
      if (producto.id === idProducto) {
        producto.bloqueo = false
        localStorage.setItem("productos", JSON.stringify(productosGuardadosEnMemoriaLocal))
      }
    })
  }
};