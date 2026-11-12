const btnMostrar = document.getElementById("btn_mostar");
const menuXD = document.getElementById("menuXD");
const btnItem = document.getElementById("item");
const btnDatos = document.getElementById("btn_enviar");
const panoramaContainer = document.getElementById("panorama-cafe");

if (btnMostrar && menuXD) {
  btnMostrar.addEventListener("click", (event) => {
    event.preventDefault();
    menuXD.classList.toggle("mostrarXD");
  });
}

if (panoramaContainer) {
  pannellum.viewer("panorama-cafe", {
    type: "equirectangular",
    panorama: "images/cafeteriatest.jpg",
    autoLoad: true,
  });
}

if (btnItem) {
  btnItem.addEventListener("click", () => {
    alert("Compra exitosa");
  });
}

if (btnDatos) {
  btnDatos.addEventListener("click", (event) => {
    event.preventDefault();
    const usuario = document.getElementById("nombre")?.value.trim();
    const correo = document.getElementById("email")?.value.trim();
    const contrasena = document.getElementById("contrasena")?.value.trim();

    if (!usuario || !correo || !contrasena) {
      alert("Debe ingresar datos");
    } else {
      alert("Datos enviados correctamente");
    }
  });
}
