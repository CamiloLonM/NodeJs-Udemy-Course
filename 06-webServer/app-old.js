const http = require('https');

http.createServer((req,res) => {

    console.log(req)

    //res.writeHead(200,{'Content-type': 'text/plain'})
    //res.writeHead(200,{'Content-type': 'application/json'})
    //res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')

    res.write('hello word')
    res.end()
    
});
.listen(8081)

console.log('Listening port', 8080 )