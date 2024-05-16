const express = require('express');
const app = express();

const port = 3000;
let list = [];

app.get('/beunhaas', function (req, res) {
    res.send('beunhazen');
});

app.get('/', function (req, res) {
    res.send('je moeder');
});

app.post('/makestuff', function (req, res) {

});

app.put('/', function (req, res) {

});

app.delete('/', function (req, res) {

})

app.listen(port, function (){
    console.log(`Listening on port ${port}`);
});