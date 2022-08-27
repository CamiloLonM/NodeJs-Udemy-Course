
// setTimeout ( ( )=> {
//     console.log('Hellow Wold')
// }, 100);

const getUsernar = ( id ) => {

    const Usernar ={
         id,
         names: 'Camilo'
    };

    setTimeout ( () => {
        console.log(Usernar)
    }, 1500);
};

getUsernar(10);