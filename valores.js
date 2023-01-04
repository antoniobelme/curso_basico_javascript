 /* Funciones */
 /* funciones declarativas */
function miFuncion() {
    return 3;
}
miFuncion();

 // funciones de expresión

 var miFuncion = function(a,b) {
     return a + b;
 }

 miFuncion();

 // scope global y local

 var miNombre="Diego";
 function nombre(){
    var miApellido="De Granda";
 }

 