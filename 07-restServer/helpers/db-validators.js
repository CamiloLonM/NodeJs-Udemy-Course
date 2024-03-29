const Role = require('../models/role')
const User = require('../models/user')

const validRole = async (role = '') => {
    const roleExists = await Role.findOne({ role })
    if (!roleExists) {
        throw new Error(`Role ${role} is invalid in DB`)
    }
}

const existsEmail = async (email = '') => {

    //Verificar correo existente
    const emailExists = await User.findOne({ email })
    if (emailExists) {
        throw new Error(`This email ${email}, already registered`)
    }
}

const existUserById = async (id) => {

    const userById = await User.findById(id)
    if (!userById) {
        throw new Error(`this User id ${id} not exist`)
    }
}


module.exports = {
    validRole,
    existsEmail,
    existUserById
}