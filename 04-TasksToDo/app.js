require('colors');                              // Importando el paquete de colores
const { inquirerMenu,                           // Estoy sacando las funciones que se encuentran en ese archivo
        pause,
        readInput,
        listHomeworkDelete,
        confirm,
        showListCheckList
        
} = require('./helpers/inquierer');

const { saveDB, readDB } = require('./helpers/saveArchive');
const Homework = require('./models/homework');

const Homeworks = require('./models/homeworks');        // Importanto el archivo de tareas


const main = async () => {                              // Funcion main o cualquier nombre

    const homeworks = new Homeworks();              // Instancia las tareas
    let opt = { };                                  // Variable llamada opcion    
    
    const   homeworkDB = readDB();                    

    if ( homeworkDB) {                              // cargar tareas y leer las tareas
        
        homeworks.loadHomeworkArray( homeworkDB);   // Dispara nuestro metodo tareas 
    };
          
    do {
        //imprimir el menú retorna una opt limpia coonsola
        opt = await inquirerMenu();                     // inicio la variable primero ,llamamos mostrar menú

        switch (opt){
            case '1':
                //Crear opcion
                const  desc = await readInput( 'Description: ');
                homeworks.createHomework( desc );
            break;

            case '2':
                homeworks.listFull();                     // llamamos el listadoFull
                    
            break;

            case '3':       // listar completadas
                homeworks.listEarringFull( true );
            break;

            case '4':       // listar Pendientes
                homeworks.listEarringFull( false );
            break;

            case '5':       // Completadas | pendiente
                const ids = await showListCheckList( homeworks.listArr);
                homeworks.toggleCompleted( ids);
            break;


            case '6':       // Borrar
                const id = await listHomeworkDelete( homeworks.listArr);      // await para que no se sobre monte el menu
                if ( id !== '0') {                    
                    const ok = await confirm('¿Are you sure?');
                    // TODO: Preguntar si está seguro

                    if ( ok) {
                        homeworks.deleteHomework(id);
                        console.log('Task deleted');              
                    }
                }                  
            break;
        }

        saveDB(homeworks.listArr);                       // lo que voy a grabar  las tareas y listados

        await pause();

    } while (opt !== '0');                              // opt al asignarle cero se sale

    // pause();

};

main();