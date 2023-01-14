var numero = prompt("Escribe un número")
numero=parseInt(numero)

function esPrimo(num){
    for (i=2;i<num;i++){
        if (num % i === 0){
            return "No es primo";
        }
    }
    return "Es primo";
}
document.write(esPrimo(numero));