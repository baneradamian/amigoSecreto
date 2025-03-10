//Se crea la variable que almacenara los datos
let amigo = [];

//Se crea la funcion para agregar amigos

function agregarAmigo(){
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value;

    if (!nombreAmigo){
        alert("Por favor, agrega un nombre");
        return;
    }

    amigo.push(nombreAmigo);
    inputAmigo.value = "";

    console.log(amigo);

    verAmigos()
}

//Se crea funcion para actualizar lista de amigos
function verAmigos(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    
    for (let i = 0; i < amigo.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigo[i];
        listaAmigos.appendChild(item);
    }
}

//Se crea funcion para seleccionar amigo secreto

function sortearAmigo(){
    if(amigo.length < 3){
        alert('Tienes pocos amigos para realizar el sorteo, ingresa un total de Tres (03) o más amigos ');
        return;
    }
    let sorteoAmigo = amigo[Math.floor(Math.random() * amigo.length)];
    console.log(sorteoAmigo)
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo secreto es: ${sorteoAmigo}`;

    let limpiarLista = document.getElementById("listaAmigos");
    limpiarLista.innerHTML = "";

}