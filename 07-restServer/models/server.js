const express = require('express')
const cors = require('cors')

class Server {

    constructor() {
        this.app = express()
        this.port = process.env.PORT
        this.userRoute = '/api/user'

        //Middlewares
        this.middlewares()

        //Routes App
        this.routes()
    }

    middlewares() {

        //Cors
        this.app.use(cors())
        // Parseo y lectura del body
        this.app.use(express.json())
        //Directorio public
        this.app.use(express.static('public'))

    }

    routes() {
        this.app.use('/api/user', require('../routes/users'))                    // path  de routes como middleware condiciónal

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server listening on port`, this.port)
        })
    }



}

module.exports = Server