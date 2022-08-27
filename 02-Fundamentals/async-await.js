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

const getEmployee = (id) => {               // Promesa
    
    return new Promise( ( resolve, reject) => {    
        const employee = employees.find(e => e.id === id)?.name; 

        (employee) 
            ? resolve(employee) 
            : reject (`There is no employee with id: ${id}`);   // If   operador ternario
    });  

};

const getSalary = (id) => {             // Promesa

    return new Promise( (a,b ) => {
        const salary = salaries.find( s => s.id === id)?.salary;
            (salary) ? a(salary) : b (`The employee with ${id} does not receive salary `);

    });
};

const getInfoUser  = async(id) => {
    
    try {
        const employee = await getEmployee(id);
        const salary = await getSalary(id);

        return `The salary of employee: ${employee} is from : ${salary}`; 

    } catch (error) {
        throw error;
    }   
}

const id = 1;

getInfoUser(id)
    .then( msg => {
        
        console.log('All Good')
        console.log(msg)
    })
    .catch (error => {
        console.log('All wrong')
        console.log(error)
    });