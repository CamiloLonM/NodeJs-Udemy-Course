const bcryptjs = require('bcryptjs')
const User = require('../models/user')


const userGet = async (req, res) => {
    // Utilizar los Query
    //const { q, name = 'No name', age, pag, limit } = req.query

    //Paginación
    const { limit = 5, since = 0 } = req.query
    const query = { status: true }

    /* const users = await User.find(query)
        .skip(Number(since))
        .limit(Number(limit)) */

    //respuesta simultanea dependientes -  destructuración de arreglos
    const [total, users] = await Promise.all([
        User.countDocuments(query),                  //total de registro
        User.find(query)                           // o condición para los activos ({ status: true })        
            .skip(Number(since))
            .limit(Number(limit))                   // volver el string en number
    ])

    res.json({
        total,
        users
    })
}

const userPost = async (req, res) => {
    // Destructuracion del body 
    // const { name, email } = req.body
    // Recibir  info del body
    // const body = req.body
    const { name, email, password, role } = req.body
    const user = new User({ name, email, password, role })              // Crear la nueva instancia del usuario(informacion establecerle)
    // Encriptar password
    const salt = bcryptjs.genSaltSync(10)
    user.password = bcryptjs.hashSync(password, salt)
    //Guardar en DB
    await user.save()
    res.json({
        //name,
        //email
        user
    })
}

const userPut = async (req, res) => {
    const { id } = req.params
    const { _id, password, google, email, ...rest } = req.body   // Se maneja el Id, no se puede procesar por chocque con la DB
    //Validacion contra la DB para poder actualizar
    if (password) {
        // Encriptar password
        const salt = bcryptjs.genSaltSync()
        rest.password = bcryptjs.hashSync(password, salt)
    }
    const userDB = await User.findByIdAndUpdate(id, rest)
    res.json({
        userDB
    })
}
const userDelete = async (req, res) => {
    const { id } = req.params
    //Borrado  fisico en DB
    //const user = await User.findByIdAndDelete(id)

    //Borrado por estado
    const user = await User.findByIdAndUpdate(id, { status: false })


    res.json(user)
}




module.exports = {
    userGet,
    userPost,
    userPut,
    userDelete
}



