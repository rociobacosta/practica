let free = false;
 const validarCliente = (time) => {
  let edad = prompt ('cual es tu edad?');
  if (edad > 18 ) {
    if(time >= 2 && time <= 7 && free == false ) {
      alert ( 'Podes pasar gratis porque sos la primer persona despues de las 2:00');
      free = true;

    } else { alert(`Son las ${time}:00 y Podes pasar pero tenes que pagar la entrada`); }

  } else{
        alert (`no pasa es menor de edad`);
  }
  }

 validarCliente (4);
 validarCliente (15);
 validarCliente (3);
 validarCliente (17);
 validarCliente (15);
 validarCliente (12);
 validarCliente (2);



 ///////////////////////////////////////////////////////////////