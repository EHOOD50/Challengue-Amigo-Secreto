// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
function agregarAmigo(){
   let nombreAmigo = document.getElementById("amigo");
   let nombre = nombreAmigo.value.trim();
        
    if (nombre) { // Verifica que no esté vacío
        amigos.push(nombre); // Agregar al array
        nombreAmigo.value = ""; // Limpiar el input

        actualizarLista();//llama la funcion que crea la lista de amigos
        
    } else {
        alert("Ingrese un texto válido."); }
 }
function actualizarLista(){
    let lista = document.getElementById("listaAmigos"); // Selecciona la lista en el HTML
    lista.innerHTML = ""; // Limpia la lista antes de actualizar
    for (let i = 0; i < amigos.length; i++) {//Recorre el array amigos
        let li = document.createElement("li"); // Crea un nuevo elemento <li>
        li.textContent = amigos[i]; // Asigna el nombre del amigo al <li>
        lista.appendChild(li); // Agrega el <li> a la lista en el HTML
    }
}
