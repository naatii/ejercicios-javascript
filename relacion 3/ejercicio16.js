let numero = prompt("introduce un número")
function factorial(num){
    let resultado = 1;
    for (i=1; i <= num; i++){
        resultado *= i
    }
    return resultado
}
alert(factorial(numero))