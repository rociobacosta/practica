let cadena = 'cadena de prueba';
let cadena2 = 'cadena';

//para concatenar
//resultado = cadena.concat(' hola');
//resultado = cadena.concat(cadena2);

//para comperar que las cadenas COMIENCEN iguales
let resultado = cadena.startsWith(cadena2);
document.write(resultado + '<br>');

//para comperar que las cadenas TERMINEN iguales
let resultado2 = cadena.endsWith(cadena2);
document.write(resultado2 + '<br>');

//para buscar si una cadena esta dentro de una cadena, sin importar la posicion
let resultado3 = cadena.includes(cadena2);
document.write(resultado3 + '<br>');

//igual al anterior nos dice el lugar de donde va a estar la primera letra
let resultado4 = cadena.indexOf(cadena2);
//si la quiero seleccionar a la letra desde acá seria 
//document.write (cadena[0]);
document.write (resultado + '<br>');

//para rellenar una cadena al principio
let resultado5 = cadena.padStart(25,'abcd');
document.write(resultado5 + '<br>');

//
