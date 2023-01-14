var num1 = 7;
var num2 = 4;
var suma = num1 + num2;
var resta = num1 - num2;
var multiplicion = num1 * num2;
var division = num1 / num2

function sumar(){
    document.getElementById("suma").innerHTML = "la suma de " +num1+ " + " +num2+" = " +suma;

}
function restar(){
    document.getElementById("resta").innerHTML = "la resta de " +num1+ " - " +num2+" = " +resta;

}
function multiplicar(){
    document.getElementById("multiplicación").innerHTML = "la multiplicación de " +num1+ " * " +num2+" = " +multiplicion;

}
function dividir(){
    document.getElementById("división").innerHTML = "la división de " +num1+ " : " +num2+" = " +division;

}
