var limite = prompt("Introduce el número")
limite = parseInt(limite)
function sumaTotal(num){
    let max=0
    for(i = 0; i<num;i++){
        max+=i
        max++
    }
    return max
}
alert(sumaTotal(limite))