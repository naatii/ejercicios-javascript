var min = prompt("Introduce el número")
var max = prompt("Introduce el otro número")
min = parseInt(min)
max = parseInt(max)
function sumaTotal(inicio, fin){
    for(i = inicio; i<=fin;i++){
        document.write(i+" ")
    }
}
sumaTotal(min, max)