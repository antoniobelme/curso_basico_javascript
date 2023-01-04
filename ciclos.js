var estudiantes = ["Marìa","Sergio","Rosa","Daniel"];

function saludarEstudiantes(Estudiante){
    console.log(`Hola, ${estudiante}`);
}
for (var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);
}

// otra estructura
for (var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}