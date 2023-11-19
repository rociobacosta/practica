// let colores = ['rosa', 'azul', 'blanco'];
// console.log (colores[0]);

const registrarEstudiantes = () =>{
  console.log ('iniciando el registro de estudiantes');

  let cantidadEstudiantes = prompt ('Ingresar la cantidad de estudiantes a registrar: ')

  console.log ("cantidad estudiantes a registrar: " + cantidadEstudiantes)

  let estudiantes = [];

  for (let i = 0; i < cantidadEstudiantes; i++){
    let nombreEstudiante = prompt ("ingrese el nombre del estudiante " + i+ ": ")

    let edad = prompt ("ingrese la edad de " + nombreEstudiante + ": " )

    let estudiante = {
      nombre: nombreEstudiante,
      edad: edad
    }

    estudiantes.push(estudiante);
  }
  return estudiantes;
}

const mostrarListaEstudiantes = (estudiantes) => {
  console.log ("lista de estudiantes registrados: ");
  for (let i = 0; i < estudiantes.lenght; i++) {
    let estudianteActual = estudiantes[i];
    console.log ("nombre: " + estudianteActual.nombre + "edad: " + estudianteActual.edad);
  }
}

//ejecutando la funcion registrarEstudiantes
let estudiantesRegistrados = registrarEstudiantes();