var array = [12,3,4,5,-23,32,-3];

// recorrer arreglos con forEach

array.forEach(function(valor, pos){
    console.log(pos, valor);
})

array.forEach( (valor, pos) => console.log(pos, valor));


// filter de un array
var res1 = array.filter(function(valor) {
    return valor < 5;
})

var res11 = array.filter( (valor) => valor < 5);

console.log("response filter",res11);


// map en array
var resp2 = array.map(function(valor) {
    return valor * valor;
}).filter( x => x < 50);
console.log("response map with filter",resp2);


// reduce en array
var arr = [10,10,15];
var resp3 = arr.reduce(function(acumulador, valor){
	return acumulador + valor;
}, 0)
// el 0 es es estado inicial de la acumulacion 
console.log("response reduce", resp3)
