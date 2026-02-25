const inputUsuario = document.getElementById("inputUsuario")
const inputCorreo = document.getElementById("inputCorreo")
const inputContrasenia = document.getElementById("inputContrasenia")
const inputRepContrasenia = document.getElementById("inputRepContrasenia")
const inputCheck = document.getElementById("inputCheck")


const botonRegistro = document.getElementById("botonRegistro")

const mensajeErrorUsuario = document.getElementById("idMensajeErrorUsuario")
const mensajeErrorCorreo = document.getElementById("idMensajeErrorCorreo")
const mensajeErrorContrasenia = document.getElementById("idMensajeErrorContrasenia")
const mensajeErrorRepContrasenia = document.getElementById("idMensajeErrorRepContrasenia")
const mensajeErrorCheck = document.getElementById("idMensajeErrorCheck")


mensajeErrorUsuario.classList.add("d-none")
mensajeErrorCorreo.classList.add("d-none")
mensajeErrorContrasenia.classList.add("d-none")
mensajeErrorRepContrasenia.classList.add("d-none")
mensajeErrorCheck.classList.add("d-none")

inputUsuario.addEventListener("change", (evento) => {
  if (evento.target.value) {
    inputUsuario.classList.remove("is-invalid")
    mensajeErrorUsuario.classList.add("d-none")
  } else {
    inputUsuario.classList.add("is-invalid")
    mensajeErrorUsuario.classList.remove("d-none")
  }
})

inputCorreo.addEventListener("change", (evento) => {
  if (evento.target.value) {
    inputCorreo.classList.remove("is-invalid")
    mensajeErrorCorreo.classList.add("d-none")
  } else {
    inputCorreo.classList.add("is-invalid")
    mensajeErrorCorreo.classList.remove("d-none")
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


inputRepContrasenia.addEventListener("change", (evento) => {
  if (evento.target.value) {
    inputRepContrasenia.classList.remove("is-invalid")
    mensajeErrorRepContrasenia.classList.add("d-none")
  } else {
    inputRepContrasenia.classList.add("is-invalid")
    mensajeErrorRepContrasenia.classList.remove("d-none")
  }
})

inputCheck.addEventListener("change", () => {
  if (inputCheck.checked) {
    mensajeErrorCheck.classList.add("d-none")
  }
})

botonRegistro.addEventListener("click", (evento) => {
  evento.preventDefault()

  if (!inputUsuario.value) {
    inputUsuario.classList.add("is-invalid")
    mensajeErrorUsuario.classList.remove("d-none")
  }

  if (!inputCorreo.value) {
    inputCorreo.classList.add("is-invalid")
    mensajeErrorCorreo.classList.remove("d-none")
  }

  if (!inputContrasenia.value) {
    inputContrasenia.classList.add("is-invalid")
    mensajeErrorContrasenia.classList.remove("d-none")
  }

  if (!inputRepContrasenia.value) {
    inputRepContrasenia.classList.add("is-invalid")
    mensajeErrorRepContrasenia.classList.remove("d-none")
  }

  if (!inputCheck.checked) {
    mensajeErrorCheck.classList.remove("d-none")
    return
  }

  if (inputContrasenia.value && inputRepContrasenia.value) {
    if (inputContrasenia.value === inputRepContrasenia.value) {
      setTimeout(() => {
        location.href = "../paginas/iniciar-sesion.html"
      }, 1000);
    } else {
      alert("las contraseñas no coinciden")
    }
  }
})