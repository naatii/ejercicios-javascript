var codigo = prompt("Indique su código de usuario","anonymous")
function texto1(){
    document.write("su código: "+codigo)
    
}    
alert("su código: "+codigo)
function texto(){
    document.getElementById("texto").innerHTML = "Su código: "+codigo
}