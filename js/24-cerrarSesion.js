const botonCerrarSesion = document.getElementById("cerrarSesion")

botonCerrarSesion.addEventListener("click", () => {
  const usuarioLog = JSON.parse(sessionStorage.getItem("usuarioLog"))
  const usuariosBD = JSON.parse(localStorage.getItem("usuarios"))
  const usuarioIndex = usuariosBD.findIndex((usuario) => usuario.id === usuarioLog.id)

  usuarioLog.login = false

  usuariosBD[usuarioIndex] = usuarioLog
  localStorage.setItem("usuarios", JSON.stringify(usuariosBD))

  setTimeout(() => {
    sessionStorage.removeItem("usuarioLog")
    location.href = "../index.html"
  }, 1000);
})