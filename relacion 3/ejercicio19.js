let numero = prompt("Introduce un número entero");
let minimo = prompt("Introduce un valor mínimo");
let maximo = prompt("Introduce un valor máximo");
minimo = parseInt(minimo);
maximo = parseInt(maximo);
numero = parseInt(numero);

function entero(num, min, max){
    while(num<0 || num<min || num>max ){    
        var num = prompt("Introduce un número entero");
        num=parseInt(num);
    }
    return num;
}
alert(entero(numero, minimo, maximo));