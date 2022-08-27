
const base  = 3;
let exit  = ' ';

for (let i = 1; i <=10 ; i++) {
    exit += `${base} x ${i} = ${base * i }\n`;
}
console.log(exit);

// con el WriteFileSync
// Es lo mismo que el WriteFile con la diferencia es que en este toca atrapar el error

fs.writeFileSync(`File-${base}.txt , exit`);  

// Con el  writeFile
// fs.writeFile(`File-${ base }.txt`, exit, (err) => {        // Para invocar archivos de escritura (crea una archivo nuevo de txt)
//     if(err) throw err;

        console.log(`File-${ base }.txt Created`);              //(crea una archivo nuevo de .txt)
// } )