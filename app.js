// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let lista = document.getElementById("listaAmigos"); // Selecciona la lista en el HTML
function agregarAmigo(){
    
   let nombreAmigo = document.getElementById("amigo");
   

   let nombre = nombreAmigo.value.trim();
        
    if (nombre) { // Verifica que no esté vacío
        amigos.push(nombre); // Agregar al array
        nombreAmigo.value = ""; // Limpiar el input
        document.getElementById("amigo").focus(); //Posiciono el cursor en la caja de texto "amigo"
        actualizarLista();//llama la funcion que crea la lista de amigos
        
    } else {
        alert("Ingrese un texto válido."); }
        document.getElementById("amigo").focus();//Posiciono el cursor en la caja de texto "amigo"
 }      
function actualizarLista(){
    
    lista.innerHTML = ""; // Limpia la lista antes de actualizar
    for (let i = 0; i < amigos.length; i++) {//Recorre el array amigos
        let li = document.createElement("li"); // Crea un nuevo elemento <li>
        li.textContent = amigos[i]; // Asigna el nombre del amigo al <li>
        lista.appendChild(li); // Agrega el <li> a la lista en el HTML
    }
}
function sortearAmigo() {
    if (amigos.length === 0) {
        document.getElementById("resultado").textContent = "No hay amigos en la lista.";
        return;
    }
    
    // Seleccionar un amigo al azar
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];
    lista.innerHTML = ""; // Limpia la lista
    // Mostrar el resultado en el elemento con id "resultado"
    document.getElementById("resultado").textContent = `El amigo secreto es: ${amigoSecreto}`;
    document.getElementById("amigo").focus();//Posiciono el cursor en la caja de texto "amigo"
}
