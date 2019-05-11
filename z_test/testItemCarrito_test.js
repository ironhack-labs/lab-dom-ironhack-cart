let config = require("../codecept.conf");

let urlSite = config.config.helpers.Puppeteer.url;

console.log(urlSite);

Feature('Que el carrito funcione con los eventos de modificar cantidad ');


Scenario('elementos estado inicial en carrito', (I) => {
    I.amOnPage(urlSite);
    let listaIDelements = ["panItem"];

    listaIDelements.forEach(id => {
        I.seeElementInDOM('#' + id);
    });


    /* verificar los datos iniciales*/

    let pathRoot1 = '#panItems .itemCarrito:first-child ';

    let listaElementosIniciales = [
        {path: pathRoot1 + 'input.txtQ', valorEsperado: 1},
        {path: pathRoot1 + 'first-child .nombre', valorEsperado: 'Iron Buble-head'}
    ];


    listaElementosIniciales.forEach(data => {
        console.log(data);
        I.seeInField(data.path, data.valorEsperado);
    });
    // .itemCarrito:first-child input.txtQ


    //I.fillField('user[email]', 'miles@davis.com');

});