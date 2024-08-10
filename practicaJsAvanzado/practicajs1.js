//1- Imprimir del 4 al cero
let i = 5;
while (i > 0 ) {
  i--;
  console.log(`i vale ${i}`)
}

//2- Saludar por consola 10 veces con el saludo "hola", excepto la 6 vez que saludara "como estas?"
let res1 = "hola";
let res2 = "como estas?";
i = 0;

while (i < 10){
  i++;
  if(i == 6){
    console.log(`${res2}`)
  }else{
    console.log(`${res1}`)
  }
}
console.log("-----------------------")

//3 Lograr que el mensaje "aún es viernes" se muestre 3 veces. Para esto, tener en cuenta: - No se puede modificar el while - no utilizar breack - no repetir console.log más de una vez 

let dia = "viernes";
let index = 0;
let array = [1,2,3];

for (index; index < array.length; index++) {
  while (dia === "viernes"){
    console.log("aún es viernes");
    dia = "sabado";
    
  }

 dia = "viernes"
}
