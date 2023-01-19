var lista = []
var listaAprobados=[]
var listaSuspensos=[]
function addToList(){
    let elemento = document.getElementById("text").value;
    elemento = parseInt(elemento)
    lista.push(elemento);
    document.getElementById("form").reset()
    console.log(lista)
}
function detectEnter(event){
    if(event.keyCode===13){
        addToList();
    }
}
function comprobarNota(lista){
    for (i=0; i<lista.length;i++){
        if(i>=4){
            listaAprobados.push(lista[i])
        }
        else if(i<5){
            listaSuspensos.push(lista[i])
        }
    }
}

function aprobados(){
    alert(listaAprobados)
}
function suspensos(){
    alert(listaSuspensos)
}