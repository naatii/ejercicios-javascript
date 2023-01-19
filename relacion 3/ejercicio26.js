var numero = prompt("Introduce un número")
numero = parseInt(numero)


function tabla(num){
    var multiplicacion=1
    for(i=num;i<=num;i++){
        for (j=1;j<11;j++){
            multiplicacion=i*j
            document.write(i+" * "+j+" = "+multiplicacion+"<br>")
        }
    }
}
tabla(numero)