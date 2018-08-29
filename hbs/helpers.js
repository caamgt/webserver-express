const hbs = require('hbs');

// helpers
// Primer parametro, el obtener el anio
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    palabras.forEach((palabra, idIndex) => {
        palabras[idIndex] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });

    return palabras.join(' ');
});