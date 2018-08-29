const express = require('express');
const app = express();
const hbs = require('hbs');

// Importamos el archivo helpers
require('./hbs/helpers');

// Para obtener el puerto que nos asignara Heroku.
// Si no exite le pone el 3000
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// Registramos los parciales de HBS.
hbs.registerPartials(__dirname + '/views/partials');
// Express HBS engine.
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'carlos'
    });
});

app.get('/about', (req, res) => {
    res.render('about')
});

/*app.get('/', (req, res) => {
    //res.send('Hola Mundo');
    let salida = {
        nombre: 'Carlos',
        edad: 33,
        url: req.url
    }
    res.send(salida);

}); */


app.listen(port, () => console.log(`Escuchando peticiones en el puerto ${port}`));