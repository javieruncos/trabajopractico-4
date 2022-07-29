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

class Agenda {
    constructor(nombre,telefono){
        this.nombre = nombre;
        this.telefono = telefono;
    }

    aniadircontacto(){

        
        for(let i = 0; i< 10;i++){
            this.nombre = prompt('ingresar usuario')
            this.telefono = parseInt(prompt('ingresa numero de telefono'))

             agenda.push(this.nombre , this.telefono); 
        

            if(confirm('desea agregar otro usuario')){

            }else{
                document.write(agenda)
                break
                
            }
        }

        if(agenda.length >= 10){
            alert('agenda llena,no puedes agregar mas usuarios')
        }
        
    }

    get regresaragenda(){
        return  agenda
    }
}


let nuevo = new Agenda("javier",4232323);


nuevo.aniadircontacto()


console.log(nuevo.regresaragenda)