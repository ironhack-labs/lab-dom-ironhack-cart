let config = require("../codecept.conf");

let urlSite = config.config.helpers.Puppeteer.url;

console.log(urlSite);

Feature('Que el carrito funcione con los eventos de modificar cantidad ');


Scenario('elementos estado inicial en carrito', (I) => {
    I.amOnPage(urlSite);
     let listaIDelements = ["panItemssss"];

    listaIDelements.forEach(id => {
        I.seeElementInDOM('#'+id);
    });


});