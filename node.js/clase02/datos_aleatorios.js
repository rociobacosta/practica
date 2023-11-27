const Chance = require('chance');
const chance = new Chance();  

//Generara datos aleatorios utilizando Chance
const randomName = chance.name();
const randomAge = chance.age();
const randomEmail = chance.email();

//Imprimir los datos aleatorios en la consola
console.log (`Nombre aleatorio: ${randomName}`);
console.log(`Edad aleatoria: ${randomAge}`);
console.log(`Email alearorio: ${randomEmail}`);
