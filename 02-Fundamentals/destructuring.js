const deadPool = {
    nombre : 'Wade',
    lastName :'Winston',
    power : 'Regeneration',
    age : 50,

    getnombre ()  {
        return `${this.nombre} ${this.lastName} ${this.power}`
    }
}


// const nombre = deadPool.nombre;
// const lastName = deadPool.lastName;
// const power = deadPool.power;

// Destructuracion    { A EXTRAER }  = de donde ;
 const { nombre, lastName, power } = deadPool;
 console.log( nombre, lastName, power , age = 0); // Le asignamos la age  directamente desde la linea de codigo

 console.log(deadPool.getnombre());

// Otra forma 

const heros = [ 'DeadPool', 'Superman', 'Batman'];

const h1 = heros[0];
const h1 = heros[1];
const h1 = heros[2];

const [ , , h3] // Para acceder solo al que necesito las comas es para salatar los otros y mostra el h3

console.log(heros);

