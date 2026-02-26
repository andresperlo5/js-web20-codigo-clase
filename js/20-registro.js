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

const usuariosBD = JSON.parse(localStorage.getItem("usuarios")) || []

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

  if (inputUsuario.value && inputCorreo.value && inputCheck.checked && inputContrasenia.value && inputRepContrasenia.value) {
    console.log("1")
    if (inputContrasenia.value === inputRepContrasenia.value) {

      const usuarioExiste = usuariosBD.find((user) => user.nombreUsuario === inputUsuario.value)

      const emailExiste = usuariosBD.find((user) => user.correoUsuario === inputCorreo.value)

      if (usuarioExiste) {
        alert("Usuario no disponible. Tenes que elegir otro nombre de usuario")
        return
      }

      if (emailExiste) {
        alert("Email duplicado. Y tenes una cuenta con este email")
        return
      }

      const nuevoUsuarios = {
        id: usuariosBD[usuariosBD.length - 1]?.id + 1 || 1,
        nombreUsuario: inputUsuario.value,
        correoUsuario: inputCorreo.value,
        contrasenia: inputContrasenia.value,
        tyc: inputCheck.checked,
        rol: "usuario",
        bloqueo: true,
        login: false
      }
      usuariosBD.push(nuevoUsuarios)

      localStorage.setItem("usuarios", JSON.stringify(usuariosBD))

      alert("usuario creado con exito")

      setTimeout(() => {
        location.href = "../paginas/iniciar-sesion.html"
      }, 1000);
    } else {
      alert("las contraseñas no coinciden")
    }
  }
})