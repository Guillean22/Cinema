let http = require('http')
let fs = require('fs')
let url = require('url')
var MongoClient = require("mongodb").MongoClient

MongoClient.connect("mongodb://localhost/TestNoSQL", function(error, db) {
    if (error) return funcCallback(error);

    console.log("Connecté à la base de données 'TestNoSQL'");
})

let server = http.createServer()
console.log("Le serveur est prêt à reçevoir des requêtes")

server.on('request', (request, response) => {
    console.log('il y a eu une requête')
    response.writeHead(200)
    //console.log(url.parse(request.url, true))
    let query = url.parse(request.url, true).query
    let name = query.name === undefined ? 'anonyme' : query.name

    fs.readFile('index.html', 'utf-8', (err, data) => {
        if (err){
            response.writeHead(404)
            response.end("Ce fichier n'existe pas")
        }else{
            response.writeHead(200, {
                'content-type': 'text/html; charset=utf-8'
            })
            data = data.replace('{{name}}', name)
            response.write(data)
            response.end()
        }
    })
})

server.listen(8080)