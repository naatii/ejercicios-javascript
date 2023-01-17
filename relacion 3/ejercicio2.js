var entrada = prompt("Introduce tu cadena de texto")

function comprobarCadena(texto){
    if (texto == texto.toUpperCase()){
        alert("texto está en mayúsculas")
    }
    else if (texto == texto.toLowerCase()){
        alert("texto está en minúsculas")
    }
    else if (texto !== texto.toUpperCase() && texto !== texto.toLowerCase()){
        alert("texto contiene ambas")
    }
}
comprobarCadena(entrada)