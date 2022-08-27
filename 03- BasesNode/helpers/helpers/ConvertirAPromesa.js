const fs = require('fs');                               // Modulo de Node para acceder alos archivos del sistema

// Forma NORMAL
const addFile = ( base = 5) => { 

    console.log('=====================');
    console.log(' Table of:', base);
    console.log('=====================');


    let exit  = ' ';

    for (let i = 1; i <=10 ; i++) {
       exit += `${base} x ${i} = ${base * i }\n`;
    }
    console.log(exit); 
 
    fs.writeFileSync(`File-${base}.txt` , exit);  
 
    console.log(`File-${ base }.txt Created`);              //(crea una archivo nuevo de .txt)
 
};

// Volverla una promesa  con NEW PROMISE

const fs = require('fs');                              // Modulo de Node para acceder alos archivos del sistema

const addFile = ( base = 5) => {     

    return new Promise = ((resolve, reject) => {
      console.log('=====================');
      console.log(' Table of:', base);
      console.log('=====================');

      let exit  = '';

      for (let i = 1; i <=10 ; i++) {
         exit += `${base} x ${i} = ${base * i }\n`;
      }
      console.log(exit);


      fs.writeFileSync(`File-${base}.txt` , exit);  

      resolve(`File-${ base }.txt  `);              //(crea una archivo nuevo de .txt)
    })
};  

module.exports = {                                    // exportar archivo y objetos de todo 
   addFile
}


// CON EL ASYNC/AWAIT
const addFile = async ( base = 5) => {                // LO monto en un try/catch por si sale un error ya que no tengo como usar el REJECT   

    try {
       console.log('=====================');
       console.log('  Table of:', base);
       console.log('====================='); 
 
       let exit  = ' ';
 
       for (let i = 1; i <=10 ; i++) {
          exit += `${base} x ${i} = ${base * i }\n`;
       }
       console.log(exit);
 
 
       fs.writeFileSync(`File-${base}.txt` , exit);  
 
       return `File-${ base }.txt `;              //(crea una archivo nuevo de .txt
 
    } catch(err) {
       throw err;
    } 
 };  

 module.exports = {
    addFile
 }


 //  LA SALIDA DEL APP.JS
 addFile( base)
    .then( nameFile => console.log(nameFile, 'Created') )        
    .catch( err => console.log(err) );
