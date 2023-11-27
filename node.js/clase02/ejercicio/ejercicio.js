const readLineSync = require('readline-sync');

const registrarEstudiantes = () =>{
  const cantidadEstudiantes = readLineSync.question ('Ingrese la cantidad de estudiantes a registrar: ');
  const estudiantes = [];

  for (let i = 0; i < cantidadEstudiantes; i++){
    const nombre = readLineSync.question(`Ingrese el nombre del estudiante ${i}:`);
    const edad = readLineSync.question (`Ingrese la edad de ${nombre}`); 
    
    const estudiante = {
      nombre,
      edad
    };;
    estudiantes.push(estudiante);

  }
  mostrarListaEstudiantes (estudiantes);
};

const mostrarListaEstudiantes = (estudiantes) => {
  console.log ("lista de estudiantes registrados: ");
  estudiantes.forEach((estudiante) => {
    console.log(`Nombre: ${estudiante.nombre}, Edad: ${estudiante.edad}`);
  });
}

//Iniciar el registro de estudiantes
registrarEstudiantes();