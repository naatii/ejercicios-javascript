let numero = prompt("Introduce un número entero");
let numeroTope = prompt("Introduce un valor final");
numeroTope = parseInt(numeroTope);
numero = parseInt(numero);

function entero(num, numTope){
    while(num<0 || num<numTope){    
        var num = prompt("Introduce un número entero");
        num=parseInt(num);
        num++;
    }
    return num;
}
alert(entero(numero, numeroTope));