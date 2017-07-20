const fs = require('fs');

//Leer un archivo txt
//archivo = fs.readFileSync('./text.txt');

// leer un archivo asincronamente
/*fs.readFile('./text.txt', (err, data) => {
    console.log(data);
});*/

const archivo = fs.createWriteStream('escritura.txt');
archivo.write("Hola mundo");
archivo.end("---");
