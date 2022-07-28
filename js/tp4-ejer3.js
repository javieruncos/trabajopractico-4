// 3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área

class Rectangulo {
    constructor(alto,ancho){
        this.altura = alto;
        this.ancho = ancho;
    }

    valorAltura(){
        //  este metodo permite cambiar los valores de altura y ancho  y mostrarlos en pantalla
        
        let altura2 = parseInt(prompt('ingresa la altura del rectangulo'));
        let ancho2 = parseInt(prompt('ingresa el ancho del rectangulo'));
        
        this.altura = altura2  ;
        this.ancho = ancho2;
        document.write(`
            <ul>
               <li>altura: ${this.altura}</li>
               <li>ancho: ${this.ancho}</li>

            </ul>
        `)
        
    }

    
    calcularPerimetro (){
   
        document.write(`el perimetro es ${this.altura*2 + this.ancho*2}<br>`)
    }
    
    calcularArea(){
        document.write(`area: ${this.altura * this.ancho}<br>`)
    }

    datos(){
        document.write(`
         <ul>
           <li>altura : ${this.altura}</li>
           <li>ancho: ${this.ancho}</li>
         </ul>
        `)
        
    }
}



 let nuevorectangulo = new Rectangulo(5,12);
 console.log(nuevorectangulo)
 nuevorectangulo.datos()
//  nuevorectangulo.valorAltura();
//  nuevorectangulo.calcularPerimetro()
//  nuevorectangulo.calcularArea()


let nuevorectangulo2 = new Rectangulo(5,10)
nuevorectangulo2.datos()
//  nuevorectangulo2.valorAltura();
//  nuevorectangulo2.calcularPerimetro()
//  nuevorectangulo2.calcularArea()