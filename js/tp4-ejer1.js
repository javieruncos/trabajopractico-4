let auto = {
    color:"negro",
    marca:"ford",
    modelo:"focus",
    caja:"manual",
    anio:2017,
    encender(){
        if(confirm('desea encender en el automovil')){
            document.write("automovil encendido")
        }else{
            document.write("automovil apagado")
        }
    }


}

auto.encender()
console.log(`el auto es de color ${auto.color}`)