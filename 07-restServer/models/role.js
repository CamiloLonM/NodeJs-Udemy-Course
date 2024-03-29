const { Schema, model } = require('mongoose')

// Se vincula con la colección que se creo directamente en la DB mongoose
const RoleSchema = Schema({
    role: {
        type: String,
        required: [true, "Role is required"]
    }
})


module.exports = model('Role', RoleSchema)