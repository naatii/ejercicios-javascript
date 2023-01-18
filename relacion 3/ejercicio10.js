var inicial = prompt("Introduce el valor inicial")
inicial = parseInt(inicial)
var final = prompt("Introduce el valor final")
final = parseInt(final)
function ordena_limites(ini, fin){
    if (ini> fin){
        let ini2 = ini++
        alert("Incrementando valor... ")
        alert(ini2 + " + 1 = " +ini )
    }
    else{
        alert("Nada pasó")
    }
}
ordena_limites(inicial, final)