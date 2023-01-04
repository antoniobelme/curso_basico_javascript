var frutas = ["manzana","plátano","Cereza","fresa"];
console.log(frutas);
//reconocer la longitud o cantidad de elementos dentro de un array
console.log(frutas.length);

//còmo acceder a cada elemento
console.log(frutas[0]); //manzana, o primer elemento, se inicia desde cero.

//Metodos para mutar el array

//push() empuja o agrega elementos al final del array 
 var masFrutas = frutas.push("Uvas");

 //pop() elimina el último elemento del array
var ultimo = frutas.pop("Uvas");

//unshift() agrega un elemento al inicio del array
var nuevoLongitud = frutas.unshift("Uvas");

//shift() elimina el primer elemento del array
var borrarFtuta = frutas.shift("Uvas");

//indexOf() ayuda a conocer la posición de un elemento dentro de un array
var posicion = frutas.indexOf("Cereza");
 