(
  async () => {

    const divPadreDelTituloPrincipal = document.getElementById("divTituloPrincipal")
    const productosBD = JSON.parse(localStorage.getItem("productos")) || []
    console.log(productosBD)
    divPadreDelTituloPrincipal.innerHTML = productosBD.map((producto) =>

      `
  <div class="col-12 col-md-6 col-lg-4 my-3">
    <div class="card img-class-propio">
      <img src="${producto.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title text-truncate">${producto.title}</h5>
        <p class="card-text ">$${producto.price}</p>
        <p class="card-text text-truncate">${producto.description}</p>
        <div class="text-center">
          <a href="../paginas/usuario-detalle-del-producto.html?id=${producto.id}" class="btn btn-primary">Ver Mas</a>
        </div>
      </div>
    </div>
  </div>
    
    `
    ).join("")


  }
)()
