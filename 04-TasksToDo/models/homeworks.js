// VARIAS TAREAS!!! 

const Homework = require('./homework');
    
/** Manejo de la DATA    este objeto va a ser el listado 
 *  Si yo necesito con un di buscar algo hacemos referencia a un listado
    *  _listado:
    *   {'uuid- #Random : { tarea del id:# , des:asd, completedEn: fecha } };
    *   {'uuid-123712-123123-2: { id:12 , des:asd,completedEn: 922231  } };   
 */



class Homeworks {
    _list = {};                                 // se maneja mejor como objeto para no estar buscando el id

    get listArr () {                            // get para retornar un nuevo areglo de la clase 
        const list = [];

        // KEYS Para extraer cada una de las lleves de el objeto, retorna un arreglo
        // Le añado el Froeach para barrer con cada uno de los string
        Object.keys(this._list).forEach( key  => {
            const homework = this._list[ key ];              // Extraigo la tarea
                list.push(homework) ;                        //Inserta la tarea de los listados
        }); 

        return list;                                         //añado la tarea al listado     
    }

    constructor() {                                    // Donde se defienne las propiedades en javascript
        this._list = {};                              // Busco inicializar el listado
    };

    //Borrar Tarea
    deleteHomework( id = '') {

        if (this._list[id]) {                         // Si existe 
            delete this._list[id];
        }
    };

    loadHomeworkArray ( homework = [ ]) {

        homework.forEach( homework => {
            this._list[homework.id] =homework;
        });
    };

    createHomework(desc = '') {

        const homework = new Homework(desc);
        this._list [homework.id] = homework;            // Para haceder a la propiedad del objeto
        
    };

    listFull () {

        console.log ();                                                         // añadirle un espacio, que no quede pegado o se le añade un salto de linea
        this._listArr.forEach(( homework, i) => {
            const idx = `${i + 1 }`.green;                                     // el index en verde 1 ,2 
            const { desc, createIn} = homework;                              // tarea 
            const estado = ( createIn) ? 'Completed'.green : 'Earring'.red;  // estado de la tarea  completada o pendiente

            console.log( `${idx} ${desc} :: ${estado}`);
        });
    };

    listEarringFull( Completed = true) {

        console.log ();     
        let indice = 0;                                                // añadirle un espacio, que no quede pegado o se le añade un salto de linea
        this._listArr.forEach(( homework, ) => {
                                                                             // el index en verde 1 ,2 
            const { desc, createIn} = homework;                              // tarea 
            const estado = ( createIn) ? 'Completed'.green : 'Earring'.red;  // estado de la tarea  completada o pendiente
            
            if( Completed) {
                // Mostrar completadas
                if( createIn) {
                    indice += 1;
                    console.log(`${indice + '.'}.green ${desc} :: ${createIn.green}`);
                }

            } else 
                // mostrar pendiente  No completada
                if( !createIn) {
                    indice += 1;
                    console.log(`${indice + '.'}.green ${desc} :: ${estado}`);
                }    
        });
    
    }

    toggleCompleted ( ids =[]) {

        ids.forEach( id => {
            const homework = this._list[ id];
            if ( !homework.createIn ) {
                homework.createIn = new Date().toISOString()
            }

        });

        this.listArr.forEach( homework => {
            if( !ids.includes(homework.id) ){

               this._list[homework.id].createIn = null;
            }
        })
         
    }
};


module.exports = Homeworks;