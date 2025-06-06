//se ejecuta el evento cuando el documento se ha cargado
document.addEventListener("DOMContentLoaded", () => {
    const amigos = []; //arreglo que almacena los amigos
    
    const inputAmigo = document.getElementById("amigo"); //input donde se ingresa el nombre del amigo
    const listaAmigos = document.getElementById("listaAmigos"); //lista de amigos
    const resultado = document.getElementById("resultado"); //resultado del sorteo

//se agrega un evento al boton de agregar amigo
    document.getElementById("btnAdicionar").addEventListener("click", () => {
        agregarAmigo(inputAmigo.value.trim());
    });
//se agrega un evento al boton de sortear amigo
    document.getElementById("btnSortear").addEventListener("click", sortearAmigo);

//funcion que agrega amigos a la lista
    function agregarAmigo(nombre) {
        if (!nombre) { //si no se ingresa un nombre
            alert("Por favor, ingrese un nombre válido."); //se muestra un mensaje de alerta
            return;
        }

        amigos.push(nombre); //se agrega el nombre al arreglo de amigos
        actualizarLista(); //se actualiza la lista de amigos
        limpiarInput(); //se limpia el input
    }
//funcion que actualiza la lista de amigos
    function actualizarLista() {
        listaAmigos.innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join(""); //se hace un mapeo del arreglo amigos[] y se agrega a la lista que se muestra en el html
    }
//funcion que sortea un amigo
    function sortearAmigo() {
        if (amigos.length === 0) { //si no hay amigos en la lista
            alert("No hay amigos disponibles para sortear."); //se muestra un mensaje de alerta
            return;
        }

        const indiceAleatorio = Math.floor(Math.random() * amigos.length); //se obtiene un indice aleatorio
        resultado.innerHTML = `<li>${amigos[indiceAleatorio]}</li>`; //se muestra el amigo sorteado
    }
//funcion que limpia el input
    function limpiarInput() {
        inputAmigo.value = ""; //se limpia el input
        inputAmigo.focus(); //se pone el foco en el input
    }
});