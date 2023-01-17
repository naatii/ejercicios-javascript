var entrada = prompt("Introduce tu entrada");

function palindromo(texto){
    if (texto === texto.slice().split("").reverse().join("")){
        alert("la entrada es un palindromo")
    }
    else{
        alert("La entrada no es un palindromo")
    }
}
palindromo(entrada)
