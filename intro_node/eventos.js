const Eventos = require('events');

class Carro extends Eventos{

    constructor(){
        super();
        this.contador = 1;
        this.name = 'chole';
    }

    arrancar(){
        console.log("El carro esta arrancando!!");
        this.emit('arranco',this.contador, this.name);
        this.contador += 1;
    }

}

var carr1 = new Carro();

carr1.on('arranco', function (cont,name) {
    console.log(cont, name, "Cachando el evento, el carro ha arrancado!!!");
})

carr1.arrancar();
carr1.arrancar();
