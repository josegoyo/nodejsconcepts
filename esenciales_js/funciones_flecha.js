var x = function (a,b) {
    return a + b;
};

var y = (a,b) => a+b;

console.log(x(2,3), y(2,2) );

const numArray = [2,4,5];

const cuadrados = numArray.map( (x)=> x*x );

console.log(cuadrados);
