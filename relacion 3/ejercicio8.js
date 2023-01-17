function piramide(){
    let numero = prompt("Introduce la altura de la piramide")
    numero = parseInt(numero);
    for (i = 1; i <= numero; i++) {
        let line = "*".repeat(i) + "<br>";
        document.write(line);
    }
    var caracter = prompt("Introduce el caracter que deseas imprimir")
    linea(caracter)
}   
function linea(simbolo){
    for (i=0;i<10;i++){
        document.write(simbolo)
    }
}
piramide()