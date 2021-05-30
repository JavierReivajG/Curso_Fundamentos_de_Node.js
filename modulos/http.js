const http = require('http')

http.createServer(function(req,res){
    console.log("nueva peticion!")
    console.log(req.url)

    switch(req.url) {
        case '/hola':
            res.write('Hola que tal')
            res.end();
            break;
        default:
            res.write('Error 404: No se lo que quieres')
            res.end()
    }

}).listen(3000)

console.log('escuchando en el puerto 3000')



