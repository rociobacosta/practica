  let dineroRoberto= prompt ("¿Cuanto dinero tienes Roberto?");
 let dineroPedro = prompt ("¿Cuanto dinero tienes Pedro?");
  let dineroCofla = prompt ("¿Cuanto dinero tienes Cofla?");

  dineroCofla = parseInt(dineroCofla);
  dineroRoberto = parseInt(dineroRoberto);
  dineroPedro = parseInt(dineroPedro);

  if (dineroCofla >= 0.6 && dineroCofla < 1) {
      alert("Cofla comprate un helado de agua");
      alert("y te sobran $" +(dineroCofla - 0.6));
  }
  else if (dineroCofla >= 1 && dineroCofla < 1.6) {
     alert("Cofla comprate un helado de crema");
     alert("y te sobran $" + (dineroCofla - 1));
  }
  else if(dineroCofla >= 1.6 && dineroCofla < 1.7) {
    alert("Cofla comprate un Bombón helado marca heladix");
    alert("y te sobran $" + (dineroCofla - 1.6));
  } 
  else if(dineroCofla >= 1.7 && dineroCofla < 1.8) {
    alert("Cofla comprate un Bombón helado marca heladovich");
    alert("y te sobran $" + (dineroCofla - 1.7));
  } 
  else if(dineroCofla >= 1.8 && dineroCofla < 2.9) {
    alert("Cofla comprate un helado marca helardo");
    alert("y te sobran $" + (dineroCofla - 1.8));
  } 
  else if(dineroCofla >= 2.9){
    alert("Cofla comprate un potecito de healdo con confites o un potecito de 1/4");
    alert("y te sobran $" + (dineroCofla - 2.9));
  } 
  else {
   alert("Cofla Lo siento, no te alcanza");
  };

   //---------------------------------------------

  if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
    alert("Roberto comprate un helado de agua");
    alert("y te sobran $" + (dineroRoberto - 0.6));
  }
  else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
   alert("Roberto comprate un helado de crema");
   alert("y te sobran $" + (dineroRoberto - 1));
  }
  else if(dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
  alert("Roberto comprate un Bombón helado marca heladix");
  alert("y te sobran $" + (dineroRoberto - 1.6));
  } 
  else if(dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
  alert("Roberto comprate un Bombón helado marca heladovich");
  alert("y te sobran $" + (dineroRoberto - 1.7));
  } 
  else if(dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
  alert("Roberto comprate un helado marca helardo");
  alert("y te sobran $" + (dineroRoberto - 1.8));
  } 
  else if(dineroRoberto >= 2.9){
  alert("Roberto comprate un potecito de healdo con confites o un potecito de 1/4");
  alert("y te sobran $" + (dineroRoberto - 2.9));
  } 
  else {
  alert("Roberto Lo siento, no te alcanza");
  };

   //--------------------------------------------------

  if (dineroPedro >= 0.6 && dineroPedro < 1) {
    alert("Pedro comprate un helado de agua");
    alert("y te sobran $" + (dineroPedro - 0.6));
  }
  else if (dineroPedro >= 1 && dineroPedro < 1.6) {
   alert("Pedro comprate un helado de crema");
   alert("y te sobran $" + (dineroPedro - 1));
  }
  else if(dineroPedro >= 1.6 && dineroPedro < 1.7) {
  alert("Pedro comprate un Bombón helado marca heladix");
  alert("y te sobran $" + (dineroPedro - 1.6));
  } 
  else if(dineroPedro >= 1.7 && dineroPedro < 1.8) {
  alert("Pedro comprate un Bombón helado marca heladovich");
  alert("y te sobran $" + (dineroPedro - 1.7));
  } 
  else if(dineroPedro >= 1.8 && dineroPedro < 2.9) {
  alert("Pedro comprate un helado marca helardo");
  alert("y te sobran $" + (dineroPedro - 1.8));
  } 
  else if(dineroPedro >= 2.9){
  alert("Pedro comprate un potecito de healdo con confites o un potecito de 1/4");
  alert("y te sobran $" + (dineroPedro - 2.9));
  } 
  else {
  alert("Pedro Lo siento, no te alcanza");
  };



array1= ["pedro", "jose", "hola"];
array2= ["chau", "marta", array1, "wanda"];


ForFuz:
for (let array in array2) {
  if (array == 2){
    for (let array of array1){
      continue ForFuz;
      document.write (array + "<br>");

    }
  } else {
    document.write(array2[array] + "<br>");
  }
};