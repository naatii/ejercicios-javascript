let numero = prompt("Introduce un número entero")
numero = parseInt(numero)
function entero(num){
    while(num<0){
        var num = prompt("Introduce un número entero")
    }
    return num
}
alert(entero(numero))