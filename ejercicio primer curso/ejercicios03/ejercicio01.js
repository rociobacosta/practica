class celulares{
  constructor(color, peso, rdp, rdc, ram){
    this._col= color;
    this._peso= peso;
    this._resPantalla =rdp;
    this._resCamara= rdc;
    this._memoriaRam=ram;
    this._encendido= false;
  }
 /* prender(){
    if(this._encendido == false){
      alert('Prendiendo celular');
      this._encendido = true;
    }else{
      alert ('El celular ya esta encendido');
    }
  }
 
  apagar(){
    if(this._encendido == true){
      alert('Apagando celular');
      this._encendido = false;
    }else{
      alert ('El celular ya esta apagado');
    }
  }*/

  presionarBotonEncendido(){
    if (this._encendido == false) {
      alert('celular prendido');
      this._encendido = true;
    } else {
      alert('celular apagado');
      this._encendido = false;
    }
  }

  reiniciar(){
  if(this._encendido == true){
    alert('reiniciando celular');
  }else{
    alert ('el celular está apagado');
  }
  }

  tomarFoto(){
    alert(`foto tomada en una resolución de ${this._resCamara}`);
  }
  grabarVideo(){
   alert(`video grabado en una resolución de ${this._resCamara}`);
  }
  mobileInfo(){
    return `
    color: <b> ${this._col}</b> <br>
    peso: <b> ${this._peso}</b> <br>
    resolución de cámara: <b> ${this._resCamara}</b> <br>
    resolución de pantalla: <b> ${this._resPantalla}</b> <br>
    memoria ram: <b> ${this._memoriaRam}</b> <br>
    `;
  }
}


const celular1 = new celulares('blanco', '150 gramos','5pulgadas', '25px', '128GB');
const celular2 = new celulares('negro', '140 gramos','5pulgadas', '20px', '64GB');
const celular3 = new celulares('rosa', '145 gramos','5pulgadas', '15px', '250GB');

/*celular1.presionarBotonEncendido();
celular1.tomarFoto();
celular1.grabarVideo();
celular1.reiniciar();
celular1.presionarBotonEncendido();*/

document.write(` <b> Solución Problema 1 </b> <br>
 ${celular1.mobileInfo()} <br>
 ${celular2.mobileInfo()} <br>
 ${celular3.mobileInfo()} <br>
`)


///////////////////////////////////////////////////////
//problema 2 :
document.write(`
  <br>
  <br>
  <br>
  <b> Solución problema 2 <b/>
  <br>
  <br>

`)
class celularAltaGama extends celulares{
  constructor(color, peso, rdp, rdc, ram, camaraExtra){
     super(color, peso, rdp,rdc,ram);
     this._camaraEx = camaraExtra;
  }
  grabarVideoLento(){
    alert('estas grabando en camara lenta');
  }
  reconocimientoFacial(){
    alert('iniciando reconocimiento facial');
  }
  infoAltaGama(){
    return this.mobileInfo() +`Resolución de camara extra: ${this._camaraEx} <br>`
  }
}

const iPhone14 = new celularAltaGama('rojo','150gramos', '7pulgadas','30px','250GB','15px');
const iPhone15 = new celularAltaGama('blanco','150gramos', '7pulgadas','30px','250GB','15px');
const iPhone13 = new celularAltaGama('lila','150gramos', '7pulgadas','30px','250GB','15px');

document.write(`
    ${iPhone14.infoAltaGama()} <br>
    ${iPhone15.infoAltaGama()} <br>
    ${iPhone13.infoAltaGama()} <br>
   
`)

///////////////////////////////////////////////////////////////////
//problema 3 :
document.write(`
  <br>
  <br>
  <br>
  <b> Solución problema 3 <b/>
  <br>
  <br>
`)

class app{
  constructor(descargas,puntuacion, peso){
    this._desc = descargas;
    this._punt = puntuacion;
    this._peso = peso;
    this._instalada = false;
    this._iniciada = false;
  }
  instalar(){
      if (this._instalada == false){
         this._instalada = true;
         alert(`App instalada correctamente`);
      }
  }
  abrir(){
    if (this._iniciada == false && this._instalada == true){
        this._iniciada =true;
        alert ('App abierta')
    }
  }
  cerrar(){
    if (this._iniciada == true && this._instalada == true){
      this._iniciada = false;
      alert ('App cerrada')
    }
  }
  desinstalar(){
    if (this._instalada == true){
      this._instalada = false;
      alert('App desinstalada correctamente');
   }
  }
  appInfo(){
    return  `
    Descargas: ${this._desc} <br>
    Puntuación: ${this._punt} <br>
    Peso: ${this._peso} <br>
    `
  }

}

const solitario = new app ('15K','3 estrellas', '150 Mb' );
const carreraDeAutos = new app ('19K','4 estrellas', '350 Mb' );
const candyCrush = new app ('23K','4.5 estrellas', '280 Mb' );


solitario.instalar();
solitario.abrir();
solitario.cerrar();
solitario.desinstalar();

document.write(`
    ${solitario.appInfo()} <br>
    ${carreraDeAutos.appInfo()} <br>
    ${candyCrush.appInfo()} <br>
   
`)
