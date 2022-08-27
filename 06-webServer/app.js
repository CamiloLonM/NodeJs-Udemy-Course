require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;


// Reender lineas
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


// middleware  Contenido Static
app.use(express.static('public'));


app.get('/', (req, res) => {            //renderizar
    res.render('home',{
        name: 'Camilo',
        title:'Course Node'
    })
  });

app.get('/generic', (req, res) => {
    res.render('generic', {
        name: 'Camilo',
        title:'Generic'
    });
  });

app.get('/elements', (req, res) => {
    res.render('elements', {
        name: 'Camilo',
        title:'Elements'
    });
  });

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');               // Con el pack
  });

app.listen(port, () =>{
    console.log(`App listening in port: ${port}`)
})