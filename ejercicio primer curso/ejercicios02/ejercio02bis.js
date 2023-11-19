let cantidad = prompt ('¿cuantos alumnos son?');
let alumnosTotales = [];

for (i = 0; i < cantidad; i++){
  alumnosTotales [i] =[prompt ('nombre del alumno' +(i +1)), 0 ];
}

const tomarAsistencia = (nombre, p) =>{
  let presencia = prompt (nombre);
  if (presencia == 'p' || presencia == 'P' ){
    alumnosTotales[p][1]++;
    //aca lo que hacemos es acceder al segundo elemento con el numero 1
    //con el i selecciono un elemento del array y con el 1 un elemento del array que esta dentro del otro arra
  }
}


//se hace un bucle for para tomar asistencia, y el 30 es para los dias del mes que tiene que tomar
for (let i = 0; i < 30; i++) {
  for (alumno in alumnosTotales) {
    tomarAsistencia (alumnosTotales[alumno][0], alumno );
  }
    
  }



//al ponerle in el nombre seria alumnos totales y la posicion alumno, esto nos pasa 
//el indice, es decir la posicion, si ponemos el OF nos pasa un valor y luego le pasamos el 0
//ademas le pasamos el = para acceder solo al nombre y luego solo alumno porque es la posición


//luego hacemos otro bucle que similar
for(alumno in alumnosTotales){
let resultado = `${alumnosTotales [alumno][0]}:<br>
__________Presentes: ${alumnosTotales[alumno][1]} <br>
__________Ausencias: ${30 - parseInt (alumnosTotales[alumno][1])}`;
if (30 - alumnosTotales[alumno][i] > 18 ) {
  resultado += 'REPROBADO POR AUSENCIAS'
}else{
  resultado +=`<br> <br>`
} document.write(resultado);
}

//ponemos 0 y 1 porue en la primera posicion esta el nombre y en la segunda la asistencia