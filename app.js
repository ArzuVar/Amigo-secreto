
document.addEventListener("DOMContentLoaded", () => {
    const amigos = [];
    
    const inputAmigo = document.getElementById("amigo");
    const listaAmigos = document.getElementById("listaAmigos");
    const resultado = document.getElementById("resultado");

    document.getElementById("btnAdicionar").addEventListener("click", () => {
        agregarAmigo(inputAmigo.value.trim());
    });

    document.getElementById("btnSortear").addEventListener("click", sortearAmigo);

    //funcion que agrega amigos


    function agregarAmigo(nombre) {
        if (!nombre) {
            alert("Por favor, ingrese un nombre válido.");
            return;
        }

        amigos.push(nombre);
        actualizarLista();
        limpiarInput();
    }

    function actualizarLista() {
        listaAmigos.innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join("");
    }

    function sortearAmigo() {
        if (amigos.length === 0) {
            alert("No hay amigos disponibles para sortear.");
            return;
        }

        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        resultado.innerHTML = `<li>${amigos[indiceAleatorio]}</li>`;
    }

    function limpiarInput() {
        inputAmigo.value = "";
        inputAmigo.focus();
    }
});