/*
D - document
O - object
M - model

*/

/* Obtener un elemento HTML */
/* const tituloPrincipal = document.getElementById("tituloPrincipal") */
/* setTimeout(() => {
  tituloPrincipal.innerText = "cualquier cosa"
}, 2000); */
/* console.log(tituloPrincipal) */

/* const parrafoPrincipal = document.getElementsByClassName("clase-parrafo")
const imagenPrincipal = document.getElementsByTagName("img") */

/* querySelector busca por defecto por el nombre de las etiquetas
pero si le paso el simbolo de (.) punto busca por clase y si le paso el simbolo
(#) numeral busca por id.
*/
//const tituloPrincipal = document.querySelector("p")
//const tituloPrincipal = document.querySelectorAll("p")


(
  async () => {
    const divPadreDelTituloPrincipal = document.getElementById("divTituloPrincipal")
    const productosFakeStore = await fetch('https://fakestoreapi.com/products')
    const arrayDeProductos = await productosFakeStore.json()

    divPadreDelTituloPrincipal.innerHTML = arrayDeProductos.map((producto) =>

      `
  <div class="col-12 col-md-6 col-lg-4 my-3">
    <div class="card img-class-propio">
      <img src="${producto.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title text-truncate">${producto.title}</h5>
        <p class="card-text ">$${producto.price}</p>
        <p class="card-text text-truncate">${producto.description}</p>
        <div class="text-center">
          <a href="../paginas/detalleDelProducto.html?id=${producto.id}" class="btn btn-primary">Ver Mas</a>
        </div>
      </div>
    </div>
  </div>
    
    `
    ).join("")


  }
)()



/* const etiquetaNuevaH1 = document.createElement("h1")
etiquetaNuevaH1.textContent = "Elemento creado desde JS"
console.log(etiquetaNuevaH1) */

/* document.body.appendChild(etiquetaNuevaH1) */

/* divPadreDelTituloPrincipal.appendChild(etiquetaNuevaH1) */