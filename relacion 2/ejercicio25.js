var nota = prompt("Escribe la nota")
if (nota<0||nota>10){
    alert("La nota no es correcta")
}
else{
    if (nota<5){
        alert("Suspenso")
    }
    if (nota>=5){
        alert("Aprobado")
    }
    if (nota==6){
        alert("Bien")
    }
    if (nota>7 & nota<10){
        alert("notable")
    }
    if (nota==10){
        alert("Sobresaliente")
    }
}
