const Server = require('./models/server');
require('dotenv').config();

//Llamamos la clase
const server = new Server();

//para levantarlo
server.listen();