const express = require('express');
const app = express();
const statusCodes = require('http-status-codes');

app.use(express.json());
const port = 3000;
const cats = [
    {
        name : "henk",
        age : "69",
        gender : "yes"
    },
    {
        name : "piet",
        age : "420",
        gender : "no"
    }
]

app.get('/greet/:name', function (req, res) {
    res.status(statusCodes.OK)
    const lang = req.query.lang;
    if(lang == 'nl'){
        res.send(`Hallo ${req.params.name} ${JSON.stringify(req.body)}`);
    } else if(lang == 'en'){
        res.send("Hello " + req.params.name);
    }

    if(req.body){
        res.send(req.body);
    }

});

app.get('/', function (req, res) {
    res.send('je moeder');
});

app.post('/cats', function (req, res) {
    const cat = req.body
    cats.push(cat);
    res.send("Wollah " + cat.name);
});

app.put('/', function (req, res) {

});

app.delete('/', function (req, res) {

});

app.use(function(err, req, res, next) {
    res.status(err.status || 500)
        .json({
            message: err.message || "Something went wrong.",
    });
})

app.listen(port, function (){
    console.log(`Listening on port ${port}`);
});