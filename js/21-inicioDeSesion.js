const inputUsuario = document.getElementById("inputUsuario")
const inputContrasenia = document.getElementById("inputContrasenia")
const botonInicioSesion = document.getElementById("idBotoninicioSesion")

const mensajeErrorUsuario = document.getElementById("idMensajeErrorUsuario")
const mensajeErrorContrasenia = document.getElementById("idMensajeErrorContrasenia")

const usuariosBD = JSON.parse(localStorage.getItem("usuarios")) || []

mensajeErrorUsuario.classList.add("d-none")
mensajeErrorContrasenia.classList.add("d-none")

inputUsuario.addEventListener("change", (evento) => {
  if (evento.target.value) {
    inputUsuario.classList.remove("is-invalid")
    mensajeErrorUsuario.classList.add("d-none")
  } else {
    inputUsuario.classList.add("is-invalid")
    mensajeErrorUsuario.classList.remove("d-none")
  }
})

inputContrasenia.addEventListener("change", (evento) => {
  if (evento.target.value) {
    inputContrasenia.classList.remove("is-invalid")
    mensajeErrorContrasenia.classList.add("d-none")
  } else {
    inputContrasenia.classList.add("is-invalid")
    mensajeErrorContrasenia.classList.remove("d-none")
  }
})

botonInicioSesion.addEventListener(("click"), (evento) => {
  evento.preventDefault()

  if (!inputUsuario.value) {
    inputUsuario.classList.add("is-invalid")
    mensajeErrorUsuario.classList.remove("d-none")
  }

  if (!inputContrasenia.value) {
    inputContrasenia.classList.add("is-invalid")
    mensajeErrorContrasenia.classList.remove("d-none")

  }

  const usuarioExiste = usuariosBD.find((user) => user.nombreUsuario === inputUsuario.value)

  const usuarioIndexExiste = usuariosBD.findIndex((user) => user.nombreUsuario === inputUsuario.value)

  if (!usuarioExiste && inputUsuario.value) {
    alert("Usuario y/o contraseña no coinciden. USUARIO")
    return
  }

  if (inputContrasenia.value === usuarioExiste.contrasenia) {
    usuarioExiste.login = true
    usuariosBD[usuarioIndexExiste] = usuarioExiste

    localStorage.setItem("usuarios", JSON.stringify(usuariosBD))
    sessionStorage.setItem("usuarioLog", JSON.stringify(usuarioExiste))

    if (usuarioExiste.rol === "admin" || usuarioExiste.rol === "superAdmin") {
      location.href = "../paginas/admin.html"
    } else {
      location.href = "../paginas/usuario.html"
    }
  } else {
    alert("Usuario y/o contraseña no coinciden. CONTRASEÑA")
  }


})