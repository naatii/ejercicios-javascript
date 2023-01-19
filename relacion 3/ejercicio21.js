var numero = prompt("Introduce un número")

function nota(entrada){
    if (entrada<5){
        alert("Suspenso")
    }
    if (entrada==5){
        alert("Aprobado")
    }
    if (entrada==6 || entrada==7){
        alert("Bien")
    }
    if (entrada==8 || entrada==9){
        alert("notable")
    }
    if (entrada==10){
        alert("Sobresaliente")
    }
}
nota(numero)