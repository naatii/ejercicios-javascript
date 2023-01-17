function piramide(){
    let numero = prompt("Introduce la altura de la piramide")
    numero = parseInt(numero);
    for (i = 1; i <= numero; i++) {
        let line = "*".repeat(i) + "<br>";
        document.write(line);
    }
}
piramide()