/*6- Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.*/


class Libro {
    constructor(ISBN,titulo,autor,numeroPaginas){
        this.ISBN = ISBN;
        this.titulo = titulo;
        this.autor = autor;
        this.numeroPaginas = numeroPaginas;

    }


    set asignarIsbn(valor){
        this.ISBN = valor
    }
    
    get regresarIsbn(){
        return this.ISBN;
    }

    set asignarNombre(valor){
        this.titulo = valor;
    }

    get regresarNombre(){
        return this.titulo
    }

    set asignarAuthor (valor){
       this.autor = valor;
    }

    get regresarAuthor(){
       return this.autor
    }

    set numerodePaginas (valor){
        this.numeroPaginas = valor;
    }

    get regresarPaginas (){
        return this.numeroPaginas
    }

  mostrarLibro(){
    document.write(
      `
         <p>El libro ${this.titulo} con ISBN ${this.ISBN} creado por el autor ${this.autor}   contiene ${this.numeroPaginas} paginas</p>  
      `
    )
  }

  calcularPaginas(){
  
  if(nuevolibro.numeroPaginas > nuevolibro2.numeroPaginas && nuevolibro.numeroPaginas > nuevoLibro3.numeroPaginas ){

    console.log(`el libro que contiene mas paginas es ${nuevolibro.regresarNombre}`)

   }else if(nuevolibro2.numeroPaginas > nuevolibro.numeroPaginas && nuevolibro2.numeroPaginas > nuevoLibro3.numeroPaginas ){
    console.log(`el libro que contiene mas paginas es ${nuevolibro2.regresarNombre}`)
   
   }else if(nuevoLibro3.numeroPaginas > nuevolibro.numeroPaginas && nuevoLibro3.numeroPaginas > nuevolibro2.numeroPaginas ){
    console.log(`el libro que contiene mas paginas es ${nuevoLibro3.regresarNombre}`)
   }
    
}
}


let nuevolibro = new Libro (123456,"Cien años de soledad",'Gabriel Garcia Marquez', 464 ,);

let nuevolibro2 = new Libro (22334455,'El alquimista','Paulo Coelho',192)

let nuevoLibro3 = new Libro (45645445,'El arte de la guerra','Sun Tzu',128)

nuevolibro.mostrarLibro()
// mostramos los get en consola
console.log(nuevolibro.regresarNombre)
console.log(nuevolibro.regresarIsbn)
console.log(nuevolibro.regresarPaginas)

nuevolibro2.mostrarLibro()
console.log(nuevolibro2.regresarNombre)
nuevoLibro3.mostrarLibro()
console.log(nuevoLibro3.regresarNombre)


nuevolibro.calcularPaginas()

