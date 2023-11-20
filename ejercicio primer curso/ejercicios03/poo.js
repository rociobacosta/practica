//En este ejemplo tenemos abstracción
class animal {
  constructor(especie, edad, color) {
    this.esp = especie;
    this.ed = edad;
    this.col = color;
    this.informacion =`soy ${this.esp}, tengo ${this.ed} años y soy de color ${this.col}`; /*no es necesario declararla en el constructor porque se asigna e inicializa dentro del propio constructor*/
  }
  verInfo(){      
    document.write(this.informacion + '<br>')
  }
}

//herencia
class perrito extends animal {
  constructor (especie, edad, color, raza){
    super(especie, edad, color);
    this.raz = raza;
  } 
  ladrar(){
    alert ("¡WAAW!");
  }
}




const perro = new animal ('perro', 5, 'marrón');
const gato = new animal ('gato', 1, 'gris');
const conejo = new animal ('conejo', 2, 'blanco');

//Todo esto se puede realizar asi:
// console.log (perro); 
// document.write (perro.informacion + '<br>');
// document.write (gato.informacion + '<br>');
// document.write (conejo.informacion + '<br>');


//O de otra manera más fácil que se crea cuando creamos un metodo
perro.verInfo();
gato.verInfo();
conejo.verInfo();

const labrador = new perrito ('perro', 3,'amarrillo', 'labrador');
labrador.ladrar();


//metodo estatico - se agrega con static en el metodo.
class perroAdulto extends animal {
  constructor (especie, edad, color, raza){
    super(especie, edad, color);
    this.raz = raza;
  } 
 static dormir(){
    alert ("zzz");
  }
}

perroAdulto.dormir();
/////////

//metodo getter y setter
class perroAdulto2 extends animal {
  constructor (especie, edad, color, raza){
    super(especie, edad, color);
    this.raza = raza;
  } 
  set setmodificarRaza (newName){
    this.raza = newName;
  }

  get getRaza (){
    return this.raza;
  }
}


const doberman = new perroAdulto2 ('perro', 3,'amarrillo', 'doberman');
doberman.setmodificarRaza = 'Caniche';
document.write(`<br> perro adulto 2 es igual a ${doberman.raza}   <br>` );
document.write('probando el metodo get ' + doberman.raza);