var numero = prompt("Introduce un número")
numero = parseInt(numero)


function tabla(num){
    var multiplicacion=1
    for(i=num;i<=num;i++){
        for (j=2;j<11;j++){
            if(primo(j)){
                multiplicacion=i*j
                console.log(i+" * "+j+" = "+multiplicacion+"<br>")
            }
            else{
                console.log("Error")
            }
        }
    }
}
function primo(num){
    if (num<2){
        return false
    }
    for(i = 2;i < num; i++){
        if (num % i == 0){
            return false
        }
    }
    return true
}

tabla(numero)