const http = require('http');

// Creamos el servidor
// Este recive un callback y este callback recive los request y respuestas que nuestro servidor le va a enviar.
http.createServer((req, res) => {

        // Por defecto regresa un sitio web, pero tambien podemos envia un JSON file.
        // Primer argumento el status, 
        res.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
            nombre: 'Carlos',
            edad: 33,
            url: req.url
        }

        res.write(JSON.stringify(salida));
        //res.write('Hola Mundo');
        // Para evitar el problema que no carga el navegador.
        res.end();
    })
    // El puerto de comunicaion, para desarrollo podria ser 3000 o 8080
    .listen(8080);

console.log('Escuchando el puerto 8080');