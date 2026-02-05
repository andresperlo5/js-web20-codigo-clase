/* 
2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.
*/

class Cuenta {
  constructor() {
    this.titular = "Alex";
    this.saldo = 0
  }

  ingresar(dinero) {
    this.saldo += dinero
  }

  extraer(cantidad) {
    const resultado = this.saldo - cantidad

    if (resultado > 0) {
      this.saldo -= cantidad
    } else {
      console.log("fondos insuficiente")
    }
  }

  informar() {
    console.log(`Tu cuenta tiene de saldo: $${this.saldo} pesos `)
  }
}

const cuenta1 = new Cuenta()
/* console.log(cuenta1)
cuenta1.informar()
cuenta1.ingresar(1500)
cuenta1.informar()
cuenta1.extraer(1000)
cuenta1.informar() */

class Tarjetas extends Cuenta {
  constructor() {
    super()
    this.tarjetaCredito = false;
    this.tarjetaDebito = false
  }

  consultarInfoTatjeta(tipoTarjeta) {
    if (tipoTarjeta === "credito") {
      console.log(`Usted ${this.tarjetaCredito ? "puede tener la tarjeta de credito de nuestro banco" : "debe comunicarse con el centro de ayuda del banco. 0800-banco"}`)
    } else if (tipoTarjeta === "debito") {
      console.log(`Usted ${this.tarjetaDebito ? "puede tener la tarjeta de debito de nuestro banco" : "debe comunicarse con el centro de ayuda del banco. 0800-banco"}`)
    } else {
      console.log("La opcion ingresada no existe")
    }
  }
}

/* const tarjeta1 = new Tarjetas()
tarjeta1.consultarInfoTatjeta("credito") */

/* const productosOnlineFakeStore = fetch("https://fakestoreapi.com/products")
console.log(productosOnlineFakeStore)

productosOnlineFakeStore
  .then((res) => res.json())
  .then((info) => console.log("info", info))
  .catch((error) => console.log(error)) */

//async / await

const obtenerProductos = async () => {
  try {
    const productosOnlineFakeStore = await fetch("https://fakestoreapi.com/products")
    const productos = await productosOnlineFakeStore.json()

    productos.forEach((producto) => document.writeln(`
      <div style="width:500px; heigth:150px;border:1px solid black; padding:30px; margin:20px 0px">
       <h1 style="text-align:center">${producto.title}</h1>
        <p>$${producto.price}</p>
        <p>${producto.description}</p>
        <div style="text-align:center">
          <img src="${producto.image}" width="200">
        </div>
        <div>
          <a href="../paginas/detalleDelProducto.html?id:${producto.id}" style="text-decoration:none; color:black; border:1px solid black; padding: 5px; width:"100%">Ver Info</a>
        </div>
      </div>
      `))


  } catch (error) {
    console.log(error)
  }
}

obtenerProductos()
