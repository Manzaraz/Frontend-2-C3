// SEGURIDAD: Si no se encuentra en localStorage info del usuario
// no lo deja acceder a la página, redirigiendo al login inmediatamente.
if (!localStorage.jwt) {
  location.replace("./index.html")
}
/* ------ comienzan las funcionalidades una vez que carga el documento ------ */
window.addEventListener('load', function () {

  /* ---------------- variables globales y llamado a funciones ---------------- */
    const URL = "https://todo-api.ctd.academy/v1"
    const uriUsuarios = URL + "/users/getMe"   
    const uriTareas =  URL +  "/tasks"   
    const token = localStorage.jwt

    // creo los selectores 
    const btnCerrarSesion = document.querySelector("#closeApp")
    const formCrearTarea = document.querySelector(".nueva-tarea")
    const nuevaTarea = document.querySelector("#nuevaTarea")

    obtenerNombreUsuario()
    consultarTareas()
  /* -------------------------------------------------------------------------- */
  /*                          FUNCIÓN 1 - Cerrar sesión                         */
  /* -------------------------------------------------------------------------- */

  btnCerrarSesion.addEventListener('click', function () {
   const cerrarSesion = confirm("¿Está seguro de que desea cerrar sesión?")

   if (cerrarSesion) {
    localStorage.clear()
    location.replace("./index.html")
   }
  });

  /* -------------------------------------------------------------------------- */
  /*                 FUNCIÓN 2 - Obtener nombre de usuario [GET]                */
  /* -------------------------------------------------------------------------- */

  function obtenerNombreUsuario() {
   
    const settings = {
      method: "GET",
      headers: {
        authorization: token
      }
    }

    fetch( uriUsuarios , settings )
      .then( response => response.json() )
      .then( data => {
        console.log("Consultando datos del usuario... ");
        console.log(data);
        const nombreUsuario = document.querySelector(".user-info p")
         nombreUsuario.innerText =  data.firstName
      })
      .catch( err => console.log(err) )    
  };


  /* -------------------------------------------------------------------------- */
  /*                 FUNCIÓN 3 - Obtener listado de tareas [GET]                */
  /* -------------------------------------------------------------------------- */

  function consultarTareas() {
    const settings = {
      method: "GET",
      headers: {
        authorization: token
      }
    }
    console.log("Consultando mis tareas ... ")
    fetch( uriTareas, settings )
    .then(response => response.json())
    .then( tareas => {
      console.log("Tareas del usuario: ... ");
      console.log(tareas);

      renderizarTareas(tareas)
      botonesCambioEstado()
      botonBorrarTarea()
    })
    .catch( err => console.log(err))
  };


  /* -------------------------------------------------------------------------- */
  /*                    FUNCIÓN 4 - Crear nueva tarea [POST]                    */
  /* -------------------------------------------------------------------------- */

  formCrearTarea.addEventListener('submit', function (event) {
    event.preventDefault()
    console.log("Crear tarea");
    console.log(nuevaTarea.value);

    const payload = {
      description:  nuevaTarea.value,
    }
    const settings = {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        authorization: token
      },
      body: JSON.stringify(payload)
    }


    fetch( uriTareas, settings)
      .then(res => res.json())
      .then( tarea => {
        console.log("Consultando tareas del usuario...");
        console.log(tarea);
        consultarTareas()
      } )
      .catch( err => console.log(err))
  });


  /* -------------------------------------------------------------------------- */
  /*                  FUNCIÓN 5 - Renderizar tareas en pantalla                 */
  /* -------------------------------------------------------------------------- */
  function renderizarTareas(listado) {
    // Obtener los listados y limpiar el contenido que tenga, para que no se sobreescriban las "tarjetas"
    const tareasPendientes = document.querySelector(".tareas-pendientes")
    const tareasTerminadas = document.querySelector(".tareas-terminadas")
    tareasPendientes.innerHTML = ""
    tareasTerminadas.innerHTML = ""

    //Buscamos el contador de tareas en verde de nuestro html
    const numeroFinalizados = document.querySelector("#cantidad-finalizadas")
    let contador = 0
    numeroFinalizados.innerHTML = contador

    listado.forEach( tarea => {
      // Creamos una tarea intermedia para analizar la fecha
      let fecha = new Date (tarea.createdAt)

      if (tarea.completed) {
        contador++
        tareasTerminadas.innerHTML += `
          <li class="tarea">
            <div class="hecha">
              <i class="fa-regular fa-circle-check"></i>
            </div>
            <div class="descripcion">
              <p class="nombre">${tarea.description}</p>
              <div class="cambios-estados">
                <button class="change incompleta" id="${tarea.id}" ><i class="fa-solid fa-rotate-left"></i></button>
                <button class="borrar" id="${tarea.id}"><i class="fa-regular fa-trash-can"></i></button>
              </div>
            </div>
          </li>
        `
      } else {
        tareasPendientes.innerHTML += `
       <li class="tarea">
            <button class="change" id="${tarea.id}"><i class="fa-regular fa-circle"></i></button>
            <div class="descripcion">
              <p class="nombre">${tarea.description}</p>
              <p class="timestamp">${fecha.toLocaleDateString()}</p>
            </div>
          </li>
        `
      }
      numeroFinalizados.innerHTML = contador

    })
  };

  /* -------------------------------------------------------------------------- */
  /*                  FUNCIÓN 6 - Cambiar estado de tarea [PUT]                 */
  /* -------------------------------------------------------------------------- */
  function botonesCambioEstado() {
    
    



  }


  /* -------------------------------------------------------------------------- */
  /*                     FUNCIÓN 7 - Eliminar tarea [DELETE]                    */
  /* -------------------------------------------------------------------------- */
  function botonBorrarTarea() {
   
    

    

  };

});