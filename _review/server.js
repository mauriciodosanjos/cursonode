//imports gerais
const http = require('http')

const server = http.createServer(function lidaComRequests(request, response){
    console.log('alguem chamou')
/*
    let resposta = '<h1>Oops 404</h1>'
    response.writeHead(404, {'Content-type':'text-html'})
    if(request.url === '/produtos'){
        reposta = 'Voce esta em produtos'
        response.writeHead(200, {'Content-type':'text-html'})
    }
    response.end(resposta)
*/

    const rotas = []
    rotas['/'] = 'Voce esta na home'
    rotas['/produtos'] = 'Voce esta em produtos'
    console.log(rotas[request.url])
    response.end(rotas[request.url] || 'Oops 404') //curto circuito
    
})

server.listen(3000, function(){ //funcão anonima - callback
    console.log('servidor ok')
})