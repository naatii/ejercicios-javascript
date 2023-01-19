var numero = prompt("Introduce un número")

function prodcuto(limite){
    let num = 1
    for (i = 1; i<=limite;i++){
        num*=i
    }
    return num
}
alert(prodcuto(numero))