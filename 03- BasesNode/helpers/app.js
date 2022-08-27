// Anexar Rutas
const{ addFile } = require('./helpers/multiply');
const colors = require('colors');
const argv = require ('./Config/yargs');


console.clear();



// retorno de la llamada de  promesa
addFile( argv.b, argv.l, argv.h)
    .then( nameFile => console.log(nameFile.rainbow, 'Created') )        
    .catch( err => console.log(err) );