var numero = prompt("Introduce un número")
function parImpar(num){
    if (num%2==0){
        return "Es primo"
    }
    else{
        return "No es primo"
    }
}
alert(parImpar(numero))