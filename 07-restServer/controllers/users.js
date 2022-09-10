const { response, request } = require('express')  // Opcional 



const userGet = (req = request, res = response) => {

    // Utilizar los Query
    const { q, name = 'No name', age, pag, limit } = req.query

    // Paginación ( Destructuracion de argumentos )
    // const { page = 1, limit}

    res.json({                                               //Con el Json se envia un objeto 
        msg: ' Get Api - Controller',
        name,
        q
    })
}

const userPost = (req, res) => {
    //const body = req.body                    // Recibir la info que se esta enviando

    // Destructurancion del body 
    const { name, email } = req.body

    res.json({                                //Con el Json se envia un objeto 
        msg: ' POST Api',
        name,
        email
    })
}

const userPut = (req, res) => {
    const { id } = req.params
    res.json({                                               //Con el Json se envia un objeto 
        msg: ' PUT Api',
        id
    })
}
const userDelete = (req, res) => {
    const id = req.params
    res.json({                                               //Con el Json se envia un objeto 
        msg: ' DELETE Api',
        id
    })
}




module.exports = {
    userGet,
    userPost,
    userPut,
    userDelete
}



