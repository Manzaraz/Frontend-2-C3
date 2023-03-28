/* -------------------------------------------------------------------------- */
/*                [1] FUNCION: esperamos la carga de la ventana               */
/* -------------------------------------------------------------------------- */
window.addEventListener('load', function () {
    const formulario = this.document.querySelector("form")

    formulario.addEventListener("submit", (e) => { 
        e.preventDefault()
        postearComentario()
     })
})

/* -------------------------------------------------------------------------- */
/*                 [2] FUNCION: capturamos los datos del form                 */
/* -------------------------------------------------------------------------- */
function capturarDatos() {
    const titulo = document.querySelector("#titulo")
    const comentario = document.querySelector("#comentario")

    // Armamos un objeto basado en l oque me pide la api
    let objeto = {
        title:  titulo.value,
        body: comentario.value,
        userId: 12,
    }
    return objeto
}

/* -------------------------------------------------------------------------- */
/*                    [3] FUNCION: enviar(postear) a la API                   */
/* -------------------------------------------------------------------------- */
// Nos basamos en la documentacion de la API:
// https://jsonplaceholder.typicode.com/guide/

function postearComentario() {
    // 👇 usamos nuestra funcion para capturar los datos y guardarlos como objeto
    const datos = capturarDatos()

    // Armar el set de configuraciones para poder hacer el POST.
    // La API acepta JSON, por eso strigificamos los datos 
    const configuraciones = {
        method: "POST",
        body: JSON.stringify(datos),
        headers: {
                'Content-type': 'application/json; charset=UTF-8',
        }
    }
    
    const URI = "https://jsonplaceholder.typicode.com/"
    fetch( `${URI}posts`, configuraciones)
        .then( respuesta => {
            return respuesta.json()
        })
        .then( objetoRespuesta => {
            console.log(objetoRespuesta);
            renderizarRespuesta(objetoRespuesta)
        })
        .catch(error => console.log(error))


}

/* -------------------------------------------------------------------------- */
/*                      [4] FUNCION: renderizar respuesta                     */
/* -------------------------------------------------------------------------- */

function renderizarRespuesta(datos) {
    const div = document.querySelector(".respuesta")
    console.log("Datos a renderizar" + {datos});
    const template = `
        <p>✅ Datos cargados en el servisor</p>
        <h4>${datos.title}</h4>
        <p>${datos.id}</p>    
        <p>${datos.userId}</p>    
        <p>${datos.body}</p>    
    `;

    div.innerHTML = template

}


/* -------------------------------------------------------------------------- */
/*                               MESA DE TRABAJO                              */
/* -------------------------------------------------------------------------- */
// Mesa de Trabajo Clase 18
// To-Do API
// Valiéndose de la documentación y el trabajo en clase, deberán lograr crear un usuario en la API y obtener su token.
// Este proceso puede realizarse a través de la herramienta Postman, o si ya lo prefieren desde un script.
// Documentación: https://todo-api.ctd.academy/#/tasks/createTask
// url: https://todo-api.ctd.academy/v1/
// Path para crear usuario: users
