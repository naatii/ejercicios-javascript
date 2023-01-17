let altura = prompt("Introduce la altura");
let base = prompt("Introduce la base");
function area(x, y){
    for (i = 1;i<=y;i++){
        let linea = "";
        for (j=1;j<=x;j++){
            if(i===1 || i === y || j === 1 || j ===x){
                linea+="*";
                console.log(linea);
            }
            else{
                linea+=" ";
                console.log(linea);
            }
        }
    }
}
area(base, altura)