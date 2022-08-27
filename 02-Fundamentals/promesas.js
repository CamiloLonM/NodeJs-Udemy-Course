const employees = [
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

const salaries = [
    {
        id: 1,
        salary: 1000
    },
    {
        id: 2,
        salary: 1500
    },
];

const getEmployee = (id) => {
    
    return new Promise( ( resolve, reject) => {    
        const employee = employees.find(e => e.id === id)?.name; 

        (employee) 
            ? resolve(employee) 
            : reject (`There is no employee with id: ${id}`);   // If   operador ternario
    });  

};

const getSalary = (id) => {

    return new Promise( (a,b ) => {
        const salary = salaries.find( s => s.id === id)?.salary;
            (salary) ? a(salary) : b (`The employee with ${id} does not receive salary `);

    });
};


const id = 2;

// getEmployee (id)                                        // Si existe el empelado
//     .then( employee => console.log(employee) )
//     .catch ( err => console.log(err) );

// getSalary (id)
//     .then(salary => console.log(salary) )
//     .catch( err => console.log(err) );

getEmployee(id)
    .then( employee => {

        getSalary(id)
            .then(salary => {

                console.log('The employee:', employee,' has in salary the :', salary)

            })

            .catch( err => console.log(err) );
    })

    .catch( err => console.log(err) );
