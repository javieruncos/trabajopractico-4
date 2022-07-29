// 4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
// Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
// Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.

class Producto{
    constructor(codigo,nombre,precio){
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }

    datos(){
        document.write(`
           
            <ul>
               <li>Nombre: ${this.nombre}</li>
               <li>Precio: ${this.precio}</li>
               <li>Codigo: ${this.codigo}</li>
            </ul>
        
        `)
    }

    lista(){
     console.log(listaProducto)
     document.write(listaProducto)

    }
}



let nuevoProducto1 = new Producto("#33333","harina","$130");
// nuevoProducto1.datos()


let nuevoProducto2 = new Producto("#44444","arroz","$120");
// nuevoProducto2.datos()



let nuevoProducto3 = new Producto('#55555','fideos','$180')
// nuevoProducto3.datos()


let listaProducto = [nuevoProducto1,nuevoProducto2,nuevoProducto3]

// lista.lista()

nuevoProducto1.lista()