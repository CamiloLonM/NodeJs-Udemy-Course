
const fs = require('fs');                               // Modulo de Node para acceder alos archivos del sistema
const colors = require( 'colors');

// convertido en promesa con Asyn
const addFile = async ( base = 5, listar = false, hasta) => {                 // LO monto en un try/catch por si sale un error ya que no tengo como usar el REJECT   

   try {
      let exit = ' ';
      let consola = '';

      for (let i = 1; i <= hasta ; i++) {
         exit += `${base} x ${i} = ${base*i }\n`;                   //Le dimos color a la X  e igual se puede con el = 
         consola += `${base} ${'x'.green} ${i} = ${base * i }\n`;     // solo le damos color a este para que no arroje el codigo con errores   
      }
      
      if( listar) {
         console.log('=====================');
         console.log('  Table of:'.green,colors.blue(base) );
         console.log('=====================');
         //console.log(exit);                                           Cambiamos la salida por 
         console.log(consola);
      }

      fs.writeFileSync(`./salida/File-${base}.txt`,exit);               // al inicio ./RutaDondeCrearArchivo

      return `File-${ base }.txt `;              //resolve e retono de la promesa(crea una archivo nuevo de .txt

   } catch(err) {
      throw err;
   }
};  

module.exports = {
   addFile
};


