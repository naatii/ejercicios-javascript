var caracter = prompt("Introduce el caracter que deseas imprimir")
function linea(simbolo){
    for (i=0;i<10;i++){
        document.write(simbolo)
    }
}
linea(caracter)