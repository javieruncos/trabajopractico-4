/*7- Nos piden realizar una agenda telefónica de contactos.

Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:

aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
existeContacto(Conctacto): indica si el contacto pasado existe o no.
listarContactos(): Lista toda la agenda
buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
agendaLlena(): indica si la agenda está llena.
huecosLibres(): indica cuántos contactos más podemos ingresar.*/
let agenda = [];

let contacto;

class Agenda {
  constructor(nombre, telefono) {
    this.nombre = nombre;
    this.telefono = telefono;
  }

  agregarContacto() {
    for (let i = 0; i < 10; i++) {
      nuevoContacto = new Agenda(
        prompt("ingresa un nombre"),
        parseInt(prompt("ingresa un numero de telfono"))
      );

      agenda.push(nuevoContacto);

      if (confirm("desea agregar  mas contatos ?")) {
      } else {
        break;
      }
      if (agenda.length >= 10) {
        alert("agenda llena , no puedes agregar mas contactos");
        break;
      }
    }
    agenda.sort();
    console.log(agenda);
  }

  contactoExiste() {

  }

  listarContacto() {
    for (let i = 0; i < agenda.length; i++) {
      document.write(`
          <ul>
          <li>${Object.values(agenda[i])}</li>
          </ul>
          `);
    }
  }

  buscarContacto(){

  }

  eliminarContacto(){

  }

  agendaLlena(){
    if(agenda.length <= 10){
      document.write("la agenda esta llena")
    }
  }


  huecosLibre(){
   switch(true){
    case agenda.length === 0:
      document.write("quedan 10 espacios en tu agenda")
      break
    case agenda.length === 1:
      document.write("quedan 9 espacios en tu agenda")
      break
    case agenda.length === 2:
      document.write("quedan 8 espacios en tu agenda")
      break
    case agenda.length === 3:
      document.write("quedan 7 espacios en tu agenda")
      break
    case agenda.length === 4:
      document.write("quedan 6 espacios en tu agenda")
      break
    case agenda.length === 5:
      document.write("quedan 5 espacios en tu agenda")
      break
    case agenda.length === 6:
      document.write("quedan 4 espacios en tu agenda")
      break
    case agenda.length === 7:
      document.write("quedan 3 espacios en tu agenda")
      break
    case agenda.length === 8:
      document.write("quedan 2 espacios en tu agenda")
      break
    case agenda.length === 9:
      document.write("quedan 1 espacios en tu agenda")
      break
    }
    
    
  }
  set cambiarNombre(valor){
    this.nombre= valor;
  }
  get regresarNombre() {
    return this.nombre;
  }

  set cambiarTelefono(valor){
    this.telefono = valor;
  }

  get mostrasTelefono(){
    return this.telefono;
  }
}
  
let nuevoContacto = new Agenda(
  prompt("ingresa un nombre"),
  parseInt(prompt("ingresa un numero de telefono"))
);
agenda.push(nuevoContacto);



// Nota : todos los metodos son ingresados por consola