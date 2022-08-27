
const { v4: uuidv4} = require('uuid');   // para cambiar le nombre : renombre

// Solo sirve para UNA TAREA!!!

class Homework {                             // todas las tareas deberian de tener un id y informacion,
    id ='';
    desc = '';                               // descripcion
    createIn = null;                         // fecha de creacion

    constructor(desc) {                      // Es lo que se va a ejecutar cuando ejecutemos una nueva instancia
        
        this.id = uuidv4();                   // Generar el id de manera asincorna
        this.desc = desc;
        this.createIn = null;
    }
};

module.exports = Homework;