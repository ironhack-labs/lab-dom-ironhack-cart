let config = require("../codecept.conf");

let urlSite = config.config.helpers.Puppeteer.url;


Feature('Que el sitio tenga los elementos esperados');

Scenario('titulo/header ok', (I) => {
    I.amOnPage(urlSite);
    I.seeInTitle("Ironhack cart");
});

Scenario('sin mensajes de error', (I) => {
    I.amOnPage(urlSite);
    I.dontSee('Page Not Found');
    I.dontSee('Error code');
    I.dontSee('Call Stack');
});


Scenario('elementos requeridos para formadd', (I) => {
    I.amOnPage(urlSite);
    let listaIDelements = ["txtAddProductoNombre", "txtAddProductoDesc","txtAddProductoQ","txtAddProductoPU","cmdAdd"];

    listaIDelements.forEach(id => {
        I.seeElementInDOM('#'+id);
    });

});


Scenario('elementos requeridos en carrito', (I) => {
    I.amOnPage(urlSite);
    let listaIDelements = ["panItems","labCarritoMonto","labCarritoNumQ"];

    listaIDelements.forEach(id => {
        I.seeElementInDOM('#'+id);
    });


});