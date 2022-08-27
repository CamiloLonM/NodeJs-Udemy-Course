// Guardar archivo y leer

const fs = require( 'fs');                              // se importa el fs
const archive ='./db/data.json';                        //Para guardar y el tipo de archivo a guardar se pasa aca para ser utiizado por ambos

// Guardar
const saveDB = ( data ) => {                            // recibo la data que quiero grabar siempre
    fs.writeFileSync(archive, JSON.stringify(data) );                    // path ( donde se guarda y la data que es la inf que quiero guardar)

};

// Leer
const readDB = () => {                              
    if (!fs.existsSync(archive)) {                         //para verificar si el archivo no existe    
    // (fs.existsSync(archive))                              o  sí existe
        return null;
    }

    const info = fs.readFileSync(archive, { encoding: 'utf-8'});   // el encoding  formato de coficacion
    const data = JSON.parse	( info) ;
    // console.log(data);

    return data;

}

module.exports = {
    saveDB,
    readDB 
};