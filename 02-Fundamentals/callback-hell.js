const empleados = [
    { 
        id: 1,
        name: 'Camilo'
    },
    {
        id: 2,
        name: 'Erica'
    },
    {
        id: 3,
        name: 'Patricia'
    }
];

const salario = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    },
];


const getEmpleado = (id , callback) => {
    const empleado = empleados.find(e => e.id === id)?.name;

    if ( empleado) {
        callback( null , empleado);
   } else {
        callback (`Empleado con id ${id} no existe`);
   }
}

const getSalarios = (id, callback) => {
    const salarios = salario.find( s =>s.id === id)?.salario;

    if ( salarios) {
        callback( null, salarios);
    } else {
        callback(`El empleado con id  ${id} no recibe salario`)
    };
};


const id = 1;

getEmpleado ( id, ( err, empleado) => {

    if( err) {
        console.log('Error!');
        return console.log(err);
    }
    getSalarios(id , (err, salarios) => {

        if (err) {
            return console.log(err);
        };

        getSalarios(id , (err, salarios) => {

            if (err) {
                return console.log(err);
            };
        

                getSalarios(id , (err, salarios) => {

                    if (err) {
                        return console.log(err);
                    };

        });            
            console.log( 'El empleado:', empleado, 'Tiene un salario de :', salarios);
        
    });
   
});