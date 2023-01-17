var numero = prompt("INtroduce un número")
function validarPares(num){
    
    if (num%2==0){
        alert("El número es par")
    }
    else if (num%2!=0){
        alert("El número es impar")
    }
}
validarPares(numero)