/*5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones*/

class Persona {
    constructor(nombre,edad,dni,sexo,peso,altura,Nacimiento){
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.anioNacimiento = Nacimiento;
    }


    mostrarGeneración(){

         if(this.anioNacimiento == 1994 && this.anioNacimiento <= 2010  ){

            document.write(`
             <ul>

               <li>Generacion: Z</li>
               <li>Poblacion de la generacion: 7.800.000</li>
               <li>Circunstancia historica: Expansion masiva del internet </li>
               <li>Rasgo caracteristico: Irreverencia </li>
             
             </ul>
            
            `)
         }else if(this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993  ){
              
            document.write(`
            <ul>

              <li>Generacion: Y</li>
              <li>Poblacion de la generacion: 7.200.000</li>
              <li>Circunstancia historica: Inicio de la digilitacion </li>
              <li>Rasgo caracteristico: Frustracion </li>
            
            </ul>
           
           `)


         }else if(this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980  ){
             
            document.write(`
            <ul>

              <li>Generacion: X</li>
              <li>Poblacion de la generacion: 9.300.000</li>
              <li>Circunstancia historica: Crisis del 73 y transicion española </li>
              <li>Rasgo caracteristico: obsesion por el exito </li>
        
            </ul>
           
           `)

         }else if(this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968){

            document.write(`
            <ul>

              <li>Generacion: Baby Boom</li>
              <li>Poblacion de la generacion: 12.200.000</li>
              <li>Circunstancia historica: Paz y explosion demografica </li>
              <li>Rasgo caracteristico: ambicion </li>
        
            </ul>
           
           `)

         }else if(this.anioNacimiento >= 1930 && this.anioNacimiento <= 1948){
            
            document.write(`
            <ul>

              <li>Generacion: Silent generation : los niños de la posguerra</li>
              <li>Poblacion de la generacion: 6.300.000</li>
              <li>Circunstancia historica: Conflictos belicos</li>
              <li>Rasgo caracteristico: Austeridad </li>
        
            </ul>
           
           `)

         }
          
      
        }

        esmayorDeEdad(){
             if (this.edad >=18){
                document.write('eres mayor de edad')
             }else{
                document.write('eres menor de edad')
             }
        }
        
        generarDni(){
            for(let i = 0 ; i<8;i++){
                
                let random = Math.floor (Math.random() * ( 9 - 0 ) + 0);
                 document.write(random)
            }
           
        }
    }
    


let nuevaPersona = new Persona("Carlos", 28 , 35535355,"H","70kg","1.70cm",1994)



nuevaPersona.mostrarGeneración()
nuevaPersona.esmayorDeEdad()
// nuevaPersona.generarDni()