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

  /* nuevoElemento */
];


function Productos(titulo, imagen, precio, descripcion) {
  this.id = productos[productos.length - 1]?.id + 1 || 1;
  this.titulo = titulo;
  this.imagen = imagen;
  this.precio = precio;
  this.descripcion = descripcion
  //Ocupa mas memoria
  /*   this.obtenerStock = function () {
      console.log(productos.length)
    } */
}

/* Instanciar */
/* const producto1 = new Productos("titulo", "imagen", "precio", "descripcion")
const producto2 = new Productos("titulo2", "imagen2", "precio2", "descripcion2")
console.log(producto1)
console.log(producto2) */
/* const producto2 = new Productos("jugo2", "url2", "1000", "juego2")
const producto3 = new Productos("jugo3", "url3", "1000", "juego3")
console.log(producto1)
console.log(producto2)
console.log(producto3) */
/* Productos.prototype.obtenerStock = function () {
  console.log(productos.length)
}

Productos.prototype.obtenerTituloProducto = function () {
  console.log(this.titulo)
}  */