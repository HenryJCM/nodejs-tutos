const os = require('os');
const fs = require('fs');

const util = require('./util.js');

let cpu = os.cpus();
let sistema = os.platform();
let usuario = os.hostname();

let cpu_string =  JSON.stringify(cpu);

fs.appendFile('pruebajs.txt', `Informacion del cpu: ${cpu_string} ` , function(error){
    if(error){
    console.log('Error al crear el archivo');
    }
})

setTimeout(() => {
    console.log('Termine');
}, 2000)

//util.saludar();
//let respuesta = util.sumar(10, 5);

//console.log(respuesta);
console.log(util.mostrar(10));