var piedra="piedra";
var papel="papel";
var tijera="tijera";
var maquina;
var final;
var m = Math.ceil(Math.random()*3);
var usuario = piedra;
var resultado = document.getElementById("resultado"); 
var jugar = document.getElementById("jugar"); 
jugar.addEventListener("click", mostrarResultado);
console.log("Usuario: "+usuario);
switch (m){
    case 1:
        maquina="piedra";
        console.log("máquina: "+maquina);
        break;
    case 2:
        maquina="papel";
        console.log("máquina: "+maquina);
        break;
    case 3:
        maquina="tijera";
        console.log("máquina: "+maquina);
        break;
    default:
        maquina= "No corresponde";
        console.log("máquina: "+maquina);
}
function mostrarResultado(){
    switch (true){
        case usuario==piedra &&  maquina==piedra || usuario==papel &&  maquina==papel || usuario==tijera &&  maquina==tijera:
            final = "Haz empatado";
            resultado.innerHTML = final;
            console.log (final);
            break;
        case usuario==papel &&  maquina==piedra || usuario==piedra &&  maquina==tijera || usuario==tijera &&  maquina==papel:
            final = "Haz ganado";
            resultado.innerHTML = final;
            console.log (final);
            break;
        case usuario==papel &&  maquina==tijera || usuario==piedra &&  maquina==papel || usuario==tijera &&  maquina==piedra:
            final = "Haz perdido";
            resultado.innerHTML = final;
            console.log (final);
            break;
        default:
            final = "No se sabe quién ganó";
            resultado.innerHTML = final;
            console.log (final);
    }
}