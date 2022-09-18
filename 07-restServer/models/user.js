const { schema, model, Schema } = require('mongoose')

const UserSchema = Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    image: {
        type: String,
    },
    role: {
        type: String,
        required: [true, 'Role is required'],
        enum: ['ADMI', 'USER']
    },
    status: {
        type: Boolean,
        default: true                // Para cuando sea borrado(false)
    },
    google: {
        type: Boolean,
        default: false
    }
})

// Sacando parametros que no quiere mostrar
UserSchema.methods.toJSON = function () {
    const { __v, password, ...user } = this.toObject()
    return user
}

module.exports = model('User', UserSchema)