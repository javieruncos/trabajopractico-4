let cuenta = {
    titular:"alex",
    saldo: 0,
    ingresar(montoIngresar){
        // toda la logica par agregar dinero a la cuenta
        this.saldo += montoIngresar ; 

    },
    extraer(monto){
        // toda la logica para extraer dinero
        if(this.saldo >= monto){
            this.saldo -= monto
        }else{
            alert('saldo insuficiente')
        }
    },
    informar(){
       
        document.write(`<p>cuenta del titular: ${this.titular} ,tiene un ${this.saldo} de  saldo</p>`)
    },
    transferir:()=>{
        // no usaria this
    }
}


cuenta.informar();

let montoIngresar = parseFloat(prompt('ingresa un monto'));
cuenta.ingresar(montoIngresar);
cuenta.informar()

let montoExtraer= parseFloat(prompt('ingresa un monto a extraer'));
cuenta.extraer(montoExtraer)
cuenta.informar();