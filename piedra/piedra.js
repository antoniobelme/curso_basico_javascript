var piedra="piedra";
var papel="papel";
var tijera="tijera";
var maquina;
var final;
var m = Math.ceil(Math.random()*3);
/* var texto = document.getElementById("texto").value; */

var texto = piedra;
var resultado = document.getElementById("resultado"); 
var jugar = document.getElementById("jugar"); 
jugar.addEventListener("click", mostrarResultado);
console.log("Usuario: "+texto);
if (m==1){
    maquina="piedra";
    console.log("máquina: "+maquina);
} else if (m==2) {
    maquina="papel";
    console.log("máquina: "+maquina);
} else if (m==3) {
    maquina="tijera";
    console.log("máquina: "+maquina);
} else {
    maquina= "No corresponde";
    console.log("máquina: "+maquina);
}

function mostrarResultado(){
    if (texto==piedra &&  maquina==piedra || texto==papel &&  maquina==papel || texto==tijera &&  maquina==tijera) {
        final = "Haz empatado"
        resultado.innerHTML = final;
        console.log (final);
    } else if (texto==papel &&  maquina==piedra || texto==piedra &&  maquina==tijera || texto==tijera &&  maquina==papel) {
        final = "Haz ganado";
        resultado.innerHTML = final;
        console.log (final);
    } else if (texto==papel &&  maquina==tijera || texto==piedra &&  maquina==papel || texto==tijera &&  maquina==piedra) {
        final = "Haz perdido";
        resultado.innerHTML = final;
        console.log (final);
    } else {
        final = "No se sabe quién ganó";
        resultado.innerHTML = final;
        console.log (final);
    }
}
