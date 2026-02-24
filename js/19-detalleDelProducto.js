(
  async () => {
    const divProductos = document.getElementById("divFilaProducto")
    const tituloProducto = document.getElementById("tituloProducto")
    const idProducto = new URLSearchParams(location.search).get("id")
    const productoFakeStore = await fetch(`https://fakestoreapi.com/products/${idProducto}`)
    const objetoDelProducto = await productoFakeStore.json()
    console.log(objetoDelProducto)

    tituloProducto.textContent = `${objetoDelProducto.title}`

    divProductos.innerHTML = `
          
         <div class="col-12 col-md-6 div-imagen text-center">
            <img src="${objetoDelProducto.image}" alt="">
          </div>
           <div class="col-12 col-md-6">
            <h3 class="text-danger">$${objetoDelProducto.price}</h3>
            <div class="w-75">
              <p>${objetoDelProducto.description}</p>
            </div>
            <div class="text-center w-75">
              <button class="btn btn-success mx-2" onclick="agregarProductoCarrito()" >Añadir al Carrito</button>
              <button class="btn btn-danger mx-2">Añadir a Favoritos</button>
            </div>
          </div>
    `

  }
)()

/* const botonCarrito = document.getElementById("botonAgregarProductoCarrito")
console.log(botonCarrito) */

/* const clickJs = () => {
  alert("Hola desde el click del boton")
} */

const agregarProductoCarrito = () => {
  const usuarioSS = JSON.parse(sessionStorage.getItem("usuarioLogueado")) || null

  if (!usuarioSS) {
    alert("No estas logueado. Por favor inicia tu sesion")

    setTimeout(() => {
      location.href = "../paginas/iniciar-sesion.html"
    }, 1000);
  }
}
