var precio_sin_iva=123.45;
var iva=21;
function aplicarIva(){
    var precio = (precio_sin_iva * iva)/100;
    document.getElementById("iva").innerHTML = "precio con iva " +(parseInt(precio_sin_iva) + parseInt(precio));
}