// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
function agregarAmigo(){
   let nombreAmigo = document.getElementById("amigo");
   let nombre = nombreAmigo.value.trim();
    //console.log(nombre);
    amigos.push(nombre);
    //console.log(amigos);
    
    if (nombre) { // Verifica que no esté vacío
        amigos.push(nombre); // Agregar al array
        nombreAmigo.value = ""; // Limpiar el input

        // Mostrar en la lista
        let lista = document.getElementById("listaAmigos");
        let nuevoItem = document.createElement("li");
        nuevoItem.textContent = nombre;
        lista.appendChild(nuevoItem);
    } else {
        alert("Ingrese un texto válido."); }
 }