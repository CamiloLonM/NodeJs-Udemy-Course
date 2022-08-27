
require('colors');
const inquierer = require('inquirer');



//Opciones de menú
const questions = [                                 // Preguntas 
    {
        type: 'list',
        name: 'option,',                            // Ese es el main que recibo
        message: '¿What would do you like to do? ',
        choices: [
            {
                value: '1',                         // Se pueden manejar como string o  números
                name: `${'1.'.red}Create task`,
                               
            },
            {   
                value: '2', 
                name:`${'2.'.red}List homework`,
            },
            {
                value: '3',
                name: `${'3.'.red}List completed tasks`,
                               
            },
            {   
                value: '4', 
                name:`${'4.'.red}List pending tasks`,
            },
            {
                value: '5',
                name: `${'5.'.red}Complete task(s)`,
                               
            },
            {   
                value: '6', 
                name:`${'6.'.red}Delete task`,
            },
            {   
                value: '0', 
                name:`${'0.'.red}Exit`,
            },
            
        ]
    }
];

const  inquirerMenu= async() => {

    console.clear();
    console.log('========================'.green);
    console.log('   Select an Optión'.white);
    console.log('========================\n'.green);

    const { option } = await inquierer.prompt(questions); //Recibo el main option
    return option;
}

const pause = async () => {

    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Press ${'ENTER'.green} of continue`
        }

    ];

    console.log('\n');
    await inquierer.prompt(question);
};

const readInput = async (message) => {

    const question = [
        {
            type: 'input',
            name: 'desc',
            message,                    // que la persona envie el texto

            validate( value) {
                if( value.length === 0) {
                    return 'Plis add a value';
                } 
                return true;
            }
        }
    ];

    const { desc} = await  inquierer.prompt( question);
    return desc;

};

// Lista de tareas elminadas
const listHomeworkDelete = async( homeworks = []) => {
    
    const choices = homeworks.map( (homework, i) => {           // Su await se invoca en la app.js
        
        const idx = `${i + 1}.`.green;

        return{
            value: homework.id,
            name: `${idx} ${homework.desc}`
        };
    });

    choices.unshift({
        
        value: '0',
        name: '0'.green + 'Exit'
    });

    const questions = [
        {
            type:' list',
            name: 'id',
            message: 'delete',
            choices
        }
    ]

    const { id } = await inquierer.prompt(questions);
    return id;  
}

const confirm =  async (message) => {              // al eliminar pedir la confirmacion del usuario a

    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ];

    const { ok } = await inquierer.prompt(question);
    return ok;
};

// Tareas completa
const showListCheckList = async( homeworks = []) => {
    
    const choices = homeworks.map( (homework, i) => {           // Su await se invoca en la app.js
        
        const idx = `${i + 1}.`.green;

        return{
            value: homework.id,
            name: `${idx} ${homework.desc}`,
            checked: ( homework.createIn) ? true : false
        };
    });

    const questions = [
        {
            type:'checkbox',
            name: 'ids',
            message: 'Selecion',
            choices
        }
    ]

    const { ids} = await inquierer.prompt(questions);
    return ids;  
}

module.exports = {
    inquirerMenu,
    pause,
    readInput,
    listHomeworkDelete,
    confirm,
    showListCheckList
};