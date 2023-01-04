var estudiantes = ["Marìa","Sergio","Rosa","Daniel"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

while(estudiantes.length>0){
    console.log(estudiantes);
    var estudiante = estudiantes.shift();
    console.log(estudiante);
    saludarEstudiantes(estudiante);
}

//prueba
export function solution(estudiantes, deathCount, nuevo) {
    while (deathCount > 0) {
      estudiantes.pop();
      deathCount = deathCount - 1;
    }
    estudiantes.push(nuevo);
    return estudiantes;
  }

  //reto
  function validaRespuesta(){
    var respuesta = prompt("¿Cuánto es 2 + 2?");
    for (var i = 0; i < 1; i++){
      if(respuesta == "4") {
        console.log("¡Excelente! has logrado sumar 2 + 2");
      } else {
        validaRespuesta();
      }
    }
  }
  // reto
  function imprimirElem(array){
    return console.log(array[0]);
  }
// reto
function imprimirLista(array){
  for(var i = 0; i < array.length; i++){
    console.log(array[i]);
  }
}
// reto
function imprimirObj(objecto){
  for(var x in objecto){
    console.log(`${x}: ${objecto[x]}`);
  }
}