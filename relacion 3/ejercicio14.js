var inicio = prompt("Introduce el valor de entrada")
var final = prompt("Introduce el valor de final")
inicio = parseInt(inicio)
final = parseInt(final)

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

for (j = inicio; j <= final; j++){
    if (primo(j)){
        document.write(j+" ");
    }
}