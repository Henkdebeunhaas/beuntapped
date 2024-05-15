const http = require('http');

const port = 3000;

const server = http.createServer(function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.write('Hello');
    res.end();
});

server.listen(port, function (){
    console.log(`Server listening on port ${port}!`);
})