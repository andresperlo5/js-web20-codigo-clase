const inputUsuario = document.getElementById("inputUsuario")
const inputContrasenia = document.getElementById("inputContrasenia")
const inputRepContrasenia = document.getElementById("inputRepContrasenia")

const botonRegistro = document.getElementById("botonRegistro")

const mensajeErrorUsuario = document.getElementById("idMensajeErrorUsuario")
mensajeErrorUsuario.classList.add("d-none")

inputUsuario.addEventListener("change", (evento) => {
  if (evento.target.value) {
    inputUsuario.classList.remove("is-invalid")
    mensajeErrorUsuario.classList.add("d-none")
  } else {
    inputUsuario.classList.add("is-invalid")
    mensajeErrorUsuario.classList.remove("d-none")
  }
})

botonRegistro.addEventListener("click", (evento) => {
  evento.preventDefault()

  if (!inputUsuario.value) {
    inputUsuario.classList.add("is-invalid")
    mensajeErrorUsuario.classList.remove("d-none")
  }

  if (inputContrasenia.value === inputRepContrasenia.value) {
    setTimeout(() => {
      location.href = "../paginas/iniciar-sesion.html"
    }, 1000);
  } else {
    alert("las contraseñas no coinciden")
  }
})