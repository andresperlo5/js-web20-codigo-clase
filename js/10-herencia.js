/* Herencias */
class Persona {
  constructor(nombre, apellido, usuario, contrasenia) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.usuario = usuario;
    this.contrasenia = contrasenia
  }

  obtenerUsuario() {
    console.log(this.usuario)
  }
}

const persona1 = new Persona("andres", "perlo", "andres2026", "123456789")
console.log(persona1)

class Roles extends Persona {
  constructor(nombre, apellido, usuario, contrasenia, rolUsuario) {
    super(nombre, apellido, usuario, contrasenia)
    this.rol = rolUsuario
  }

  obtenerRol() {
    console.log(this.rol)
  }
}

const rol1 = new Roles("andres", "perlo", "andres2026", "123456789", "admin")
console.log(rol1)