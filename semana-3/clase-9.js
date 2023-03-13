// nuevo array con listado de planes
const planesMensuales = [
  {
    tipo: "Básico",
    costo: 300,
    descripcion: "Podes escuchar música sin límites todo el mes.",
  },
  {
    tipo: "Dúo",
    costo: 450,
    descripcion: "Música ilimitada para vos y alguien más.",
  },
  {
    tipo: "Familiar",
    costo: 600,
    descripcion: "El mejor plan, hasta un total de 5 miembros.",
  },
];

// Escuchamos el evento de 'carga' de la ventana 👇
window.addEventListener("load", () => {
  const footer = document.querySelector("footer");
  console.log(footer);

  // Crear variables para usarlas dentro del bucle que genera el carrusel a traves del setInterval()
  let total = planesMensuales.length;
  let contador = 0;

  // Creo un intervalo y lo almaceno dentro de una variable
  const intervalo = setInterval(() => {
    // genero un interador para calcular la posicion actual
    const posicion = contador % total;

    console.log(contador);
    console.log(`Posicion: ${posicion}`);

    // insertar en el HTML un template literal
    footer.innerHTML = `<p>Plan: <strong>${planesMensuales[posicion].tipo}</strong> $${planesMensuales[posicion].costo}</p><p>${planesMensuales[posicion].descripcion}</p>`;

    contador++;
  }, 3000);

  // Añadir un listener del  dobleClick , en el footer para frenar el intervalo.
  footer.addEventListener("click", function () {
    clearInterval(intervalo);
    console.log("🛑 Frenamos el intervalo 🏆");
  });
});

/* -------------------------------------------------------------------------- */
/*                               MESA DE TRABAJO                              */
/* -------------------------------------------------------------------------- */
// Vamos a utilizar el setTimeout para preguntarle al usuario despues de unos segundos.
// 1- Una vez cargada la página y pasados 12 segundos debemos preguntarle al usuario si desea
// conocer más música (podemos usar un confirm).
// 2- Si el usuario confirma debemos abrir una nueva pestaña en -> https://open.spotify.com/
// 3- Si el usuario cancela debemos agregar un parrafo dentro del div '#perfil'(sin eliminar nada dentro)
// 4- El parrafo agregado debe ser de color verde y decir: "Usuario oficial de Spotifront"
// 5- Por ultimo, si ese parrafo es clickeado, debe mostrar una alerta al usuario que diga: "Gracias por confiar en nosotros."

window.addEventListener("load", () => {
  setTimeout(() => {
    // Aquí el evento load estaba sin comillas
    const escuchar = (() => confirm("¿Deseas conocer más música?"))();

    if (escuchar) {
      window.open("https://open.spotify.com", "_blank");
    } else {
      let parrafoPerfil = document.querySelector(".perfil");
      parrafoPerfil.innerHTML += `
      <p style="color: green;" id="parrafoPerfil" > Usuario Oficial de Spotyfront </p>
      `;
      const click = document.getElementById("parrafoPerfil");
      console.log(click);
      click.addEventListener("click", () =>
        alert("Gracias por confiar en nosotros")
      );
    }
  }, 3000);
});
