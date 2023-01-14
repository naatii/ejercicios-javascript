function tabla(){
    var multiplicacion=0
    var numero = prompt("Escribe el número de la tababla que deseas ver")
    numero=parseInt(numero)
    for(i=numero;i<numero+1;i++){
        for (j=1;j<11;j++){
            multiplicacion=i*j
            document.write(i+" * "+j+" = "+multiplicacion+"<br>")
        }
        
    }
}