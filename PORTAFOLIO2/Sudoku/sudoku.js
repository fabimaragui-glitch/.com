let tablero = [
[1,0,0],
[0,2,0],
[0,0,3]
];

const contenedor = document.getElementById("tablero");

function crearTablero(){

contenedor.innerHTML="";

for(let i=0;i<3;i++){

for(let j=0;j<3;j++){

let celda=document.createElement("div");
celda.className="casilla";

if(tablero[i][j]!==0){

celda.textContent=tablero[i][j];
celda.classList.add("fija");

}else{

let input=document.createElement("input");
input.maxLength=1;

input.addEventListener("input",function(){

let valor=parseInt(input.value);

if(isNaN(valor) || valor<1 || valor>3){
input.value="";
return;
}

if(!esValido(i,j,valor)){
alert("Número repetido en fila o columna");
input.value="";
return;
}

tablero[i][j]=valor;

if(verificarVictoria()){
setTimeout(()=>alert("Ganaste"),100);
}

});

celda.appendChild(input);

}

contenedor.appendChild(celda);

}

}

}

function esValido(fila,col,numero){

for(let i=0;i<3;i++){
if(tablero[fila][i]===numero) return false;
}

for(let i=0;i<3;i++){
if(tablero[i][col]===numero) return false;
}

return true;

}

function verificarVictoria(){

for(let i=0;i<3;i++){
for(let j=0;j<3;j++){
if(tablero[i][j]===0) return false;
}
}

return true;

}

crearTablero();