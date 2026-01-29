/* Clases Js */
class Productos {
  constructor(titulo, imagen, precio, descripcion) {
    this.titulo = titulo;
    this.imagen = imagen;
    this.precio = precio;
    this.descripcion = descripcion
  }

  obtenerTituloProducto() {
    console.log(this.titulo)
  }
}

const producto1 = new Productos("titulo", "imagen", "precio", "descripcion")
console.log(producto1)