

const calcularPromedio = (numeros) =>{
  let suma = 0;
  for ( let i = 0; i < numeros.length; i++){
    suma += numeros [i];
  }
  
  let promedio = suma / numeros.length;
  return promedio;
} 
let numeros = [20, 15, 10, 4, 7, 6, 7, 7];
let resultado = calcularPromedio(numeros);
console.log(resultado);