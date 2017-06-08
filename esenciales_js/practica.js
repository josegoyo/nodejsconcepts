var Objeto = function(){

};

Objeto.prototype.Saludar = function(msg,callback){

	console.log(msg);

	if(typeof callback == 'function'){
		callback();
	}else{
		console.log('callback no es una funcion');
	}
};

// creando una instacia

var obj = new Objeto();

obj.Saludar("hola mundo del js", function(){
	console.log('se ejecuto el callback');

});

obj.Saludar('Opss',6);

Objeto.prototype.Despedida = function(msg){
	console.log(msg);


};

/*obj.Despedida("Adios me despido");*/
