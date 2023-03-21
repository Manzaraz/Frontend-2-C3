let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};
const listado = [{
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
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];
const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');
profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */
function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
 
  const nombrePunto1 = prompt("Ingese su nombre por favor:")
  const anioNacimientoPunto1 = prompt("Ingese su año de nacimiento por favor:")
  const ciudadPunto1 = prompt("Ingese su ciudad por favor:")
  const interesPorJsPunto1 = confirm("¿Te interesa Javascript?")
  let anioActual = 2023;
  let edadPunto1 = anioActual - anioNacimientoPunto1;
 datosPersona.nombre = nombrePunto1
 datosPersona.edad = edadPunto1
 datosPersona.ciudad = ciudadPunto1
 datosPersona.interesPorJs = interesPorJsPunto1
  console.log(datosPersona)
  
}
function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  
  const nombrePunto2 = document.getElementById('nombre').innerHTML =`${datosPersona.nombre}`;
  const edadPunto2 = document.getElementById('edad').innerHTML = `${datosPersona.edad}`;
  const ciudadPunto2 = document.getElementById('ciudad').innerHTML = `${datosPersona.ciudad}`;
  const javascriptPunto2 = document.getElementById('javascript').innerHTML = `${datosPersona.interesPorJs}`;
}
function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  const materias =  document.querySelector('#fila');
  materias.innerHTML = ""
  listado.forEach(elemento => {
    materias.innerHTML +=
                                `<div class="caja">
                                <img src="${elemento.imgUrl}" alt="${elemento.lenguajes}">
                                <p class:="" "lenguajes"="">Lenguajes: ${elemento.lenguajes} </p>
                                <p class:="" "bimestre"="">Bimestre: ${elemento.bimestre}</p>
                                </div>
                                `
  });
  
}
function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
 
  const sitio = document.querySelector("body");
  cambiarTema.addEventListener("click",()=> {
      sitio.classList.toggle("dark");
  })
}
/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
 
window.onkeydown = (f) => {
  const parrafo = document.getElementById("sobre-mi");
  f.code == "KeyF" && parrafo.classList.toggle("oculto");
};
