/*                        [4] FUNCION: renderizar errores                      */

// Desarrollamos esta funcion para llamarla en el submit
function renderizarErrores(listado) {
  const cajaErrores = document.querySelector("#errores");
  console.log(cajaErrores);
  if (cajaErrores) {
    cajaErrores.remove();
  }

  if (listado.length > 0) {
    // const divTemplate = document.createElement("div");
    const divTemplate = document.createElement("fieldset");
    divTemplate.setAttribute("id", "errores");
    divTemplate.style =
      "background: rgba(255, 0, 0, 0.2); padding: .5em 1em; color: red; margin: 0.5em 0; ";
    listado.forEach((error) => {
      divTemplate.innerHTML += `<p><small>${error}</small></p>  `;
    });
    form.appendChild(divTemplate);
  }
}

/* ----------------------------- MESA DE TRABAJO ---------------------------- */
/* -------------------------------------------------------------------------- */
/*                [5] FUNCION: Formulario completado con éxito                */
/* -------------------------------------------------------------------------- */
// Esta funcion se va a encargar de mostrar que el formulario se completó correctamente.
// Para eso debera cumplir con los siguientes requerimientos.
// 1 - Recibe el listado de errores, y solo si no hay ninguno debe:
// 2 - mostrar al final del formulario un caja con la misma estructura que la caja de errores, pero con la tonalidad verde
// 3 - dentro la caja debe mostrar un párrafo con el mensaje: "¡Formulario completado con éxito!"
// 4 - a su vez se debe deshabilitar el boton del formulario
// 5 - finalmente pasados 4 segundos: se debe eliminar esa caja, habilitar el boton y limpiar el formulario

function mostrarMensajeExito(listado) {
  //   desarrollar la funcion aqui
}
