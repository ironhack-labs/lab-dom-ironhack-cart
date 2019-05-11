const http = require("http");
const st = require('st');

const configServer = {
    path: __dirname + '/starter-code',
    index: 'index.html',
    cache: false
};

http.createServer(st(configServer))
    .listen(3000, () => {
        console.log('Iniciado en 3000');
    })
;
