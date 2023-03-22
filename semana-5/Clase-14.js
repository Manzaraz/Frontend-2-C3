// chequearUsuarioValido()
// Vamos a trabajar pasando información al Storage.
// De esta manera vamos a poder consumir en un html algo que haya guardado otro.
// 👉 Para eso debemos agregar al principio de la función [5] en script 'Clase-13' la siguiente línea:
//     localStorage.setItem('user', JSON.stringify(estadoUsuario));

/* -------------------------------------------------------------------------- */
/*           [6] FUNCION: Escuchamos el evento de carga de la página          */
/* -------------------------------------------------------------------------- */
window.addEventListener("load", function () {
  // 👇 Todo lo que desarrollamos dentro, se ejecuta una vez que se carga la página
  const user = recuperarDataStorage()

  renderizarElementos(user)
});

/* -------------------------------------------------------------------------- */
/*                 [7] FUNCION: Recuperar la info del storage                 */
/* -------------------------------------------------------------------------- */
function recuperarDataStorage() {
  const datosEnJSON = localStorage.getItem("datosUsuario")
  //  console.log(datosEnJSON);

   const datosParseados = JSON.parse(datosEnJSON)
  //  console.log(datosParseados);

  // const data = JSON.parse(localStorage.getItem("datosUsuario"))

   return datosParseados
  //  return data

}

/* -------------------------------------------------------------------------- */
/*                [8] FUNCION: Renderizamos la info en pantalla               */
/* -------------------------------------------------------------------------- */
function renderizarElementos(objeto) {
  console.log(objeto);
  // capturamos los nodos
  const email = document.querySelector("#email")
  const perfil = document.getElementById("perfil")

  //  Pintar las propiedades del objeto en pantalla
  email.innerText= objeto.email
  perfil.textContent = objeto.rol
  botonCerrarSesion()
}

/* ----------------------------- MESA DE TRABAJO ---------------------------- */
/* -------------------------------------------------------------------------- */
/*                     [9] FUNCION: Boton de cerrar sesion                    */
/* -------------------------------------------------------------------------- */
// Ahora vamos a crear elementos en el DOM dinamicamente y le asignaremos a esos elementos la escucha de eventos.
// ☝ La funcion debe ser ejecutada al final del evento Load.
// La idea es crear un boton para cerrar sesión. Entonce necesitamos cumplir los siguientes puntos:
// 1- Crear un elemento <button>
// 2- Que ese botón tenga el texto "Cerrar sesión"
// 3- El boton tiene que tener ciertos estilos:
//     - padding arriba y abajo de 5px y a los costados 20px
//     - color de fondo rojo con transparencia: rgba(255,0,0,0.2)
//     - color de letra rojo
//     - margenes a todos los lados de 20px
//     - ningún borde
//     - cursor de tipo pointer
// 4- Tenemos que agregar el botón en pantalla, adentro del div con la clase 'user', al final del mismo
// 5- El botón debe reaccionar cuando se le hace click
// 6- Mediante el click debe aparecer un cuadro de confirmación que pregunte: "¿Seguro desea cerrar sesión?"
// 7- Si el usuario acepta debe borrar todo el storage y redirigirlo a la pantalla de Login.


function botonCerrarSesion() {
  //    👇 desarrollar la función

  const btn = document.createElement("button");
  btn.textContent= "cerrar sesion";
  btn.style ="background: rgba(255,0,0,0.2); padding: 5px 20px; color: red; margin: 20px; border: none; cursor: pointer";
  const div = document.querySelector(".user");
  div.appendChild(btn);

  btn.addEventListener("click", function(){
    const resultado = confirm("seguro desea cerrar sesion?")
    if(resultado){
      localStorage.removeItem("datosUsuario")
      location.replace('./index.html') 
    }
  })
  
}