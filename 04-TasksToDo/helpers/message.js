require('colors');


const showMenu =  () => {

    return new Promise( resolve => {
        console.clear();
        console.log( '========================'.green);
        console.log( '   Select an Optión'.white);
        console.log( '========================\n'.green);

        console.log(`${'1.'.green} Create task`);                                   //  crear tarea
        console.log(`${'2.'.green} List homework`)                                  //  Listar tarea
        console.log(`${'3.'.green} List completed tasks`)                           //  lista tareas completadas
        console.log(`${'4.'.green} List pending tasks`)                             //  lista tareas pendientes
        console.log(`${'5.'.green} Complete task(s)`)                               //  eliminar tarea
        console.log(`${'6.'.green} Delete task`)                                    //  Salida
        console.log(`${'0.'.green} Exit \n`)

        const  readline = require ('readline').createInterface ({ 
            input: process.stdin,
            output: process.stdout                                                    // preparando la interfax para el usuario
        });

        readline.question('Select a option:', (opt) => {                              // ( OPT ) la opcion la respuesta 
            readline.close();   
            resolve(opt) ;                                                     // TOCA CERRARLO porque si no se queda pidiendo info al Usuario
        });
    });
};


const pause = () => {

    return new Promise( resolve => {
        const readline = require ('readline').createInterface ({ 
            input: process.stdin,
            output: process.stdout                                                   
        });
        
        readline.question(`\nPress ${'ENTER'.green} of continue\n`, (opt) => {                                                             
            readline.close(); 
            resolve();                                                        
        });
    });  
};


module.exports = {                      // para llamar la funcion de la App
    showMenu,
    pause
}