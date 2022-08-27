

const argv = require('yargs')
                    .option('b', {
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                        describe: 'Is the base of the multiplication table '
                    })
                    .option('l', {                                  // se añanade en multiply.js 
                        alias: 'listar',
                        type: 'boolean',
                        demandOption: false,
                        describe: 'Show table in console '
                    })
                    .option('h', {                                  // se añanade en multiply.js 
                        alias: 'hasta',
                        type: 'number',
                        default: 10,
                        demandOption: true,
                        describe: 'Up to the number '
                    })
                    .check( (argv, options) => {                    //verificar
                        if( isNaN ( argv.b ) ){                     // Si es un NaN verifique la base (tiene que ser un #)
                            throw 'The base has to be a number '
                        }
                        return true;
                    })
                    .argv;



module.exports = argv

//console.log(process.argv);                 // De los porcesos propios de NODE
//console.log( argv );                      // De el Yargs

// Argumentos o banderas
// const[ , , arg3 = 'base =5'] = process.argv                      // le coloco la base cualquier numero para queno sea un Undefined 
// const[, base = 5 ] = arg3.split( '=' );
// console.log(arg3);

// retorno de la llamada de  promesa
// addFile( base)
//     .then( nameFile => console.log(nameFile, 'Created') )        
//     .catch( err => console.log(err) );
