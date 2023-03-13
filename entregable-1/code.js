let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};
const listado = [
  {
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];
const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector("#cambiar-tema");
profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */
function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  datosPersona.nombre = prompt("¿Cuál es tu nombre?");
  datosPersona.edad = new Date().getFullYear() - prompt("¿En qué año naciste?");

  datosPersona.ciudad = prompt("¿En qué ciudad vives?");
  datosPersona.interesPorJs = confirm("¿Te interesa JavaScript?");
}
function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */

  document.getElementById("nombre").textContent = datosPersona.nombre;
  document.getElementById("edad").textContent = datosPersona.edad;
  document.getElementById("ciudad").textContent = datosPersona.ciudad;
  document.getElementById("javascript").textContent = datosPersona.interesPorJs
    ? `Sí`
    : `No`;
}
function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */

  let contenedorMaterias = document.getElementById("fila");

  listado.forEach((item) => {
    fila.innerHTML += `
        <article class="caja">  
          <img src="${item.imgUrl}" alt="${item.lenguajes}"> 
          <p class="lenguajes"> ${item.lenguajes} </p>
          <p class="bimestre"> ${item.bimestre} </p>
        </article>
        `;
  });
  materiasBtn.removeEventListener("click", recorrerListadoYRenderizarTarjetas);
}
function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */

  const cambiarTema = document.getElementById("cambiar-tema");

  const sitio = document.getElementById("sitio");

  if (sitio.classList.contains("dark")) {
    sitio.classList.remove("dark");
    cambiarTema.textContent = "Tema oscuro";
  } else {
    sitio.classList.add("dark");
    cambiarTema.textContent = "Tema claro";
  }
}
/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

document.addEventListener("keydown", function (e) {
  console.log(e);
  if (e.code == "KeyF") {
    document.querySelector("#sobre-mi").classList.toggle("oculto");
  }
});
