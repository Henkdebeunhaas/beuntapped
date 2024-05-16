const express = require('express');
const app = express();

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

app.get('/cats', function (req, res) {
    res.status(200);
    res.json(cats);
});

app.get('/', function (req, res) {
    res.send('je moeder');
});

app.post('/makestuff', function (req, res) {
    const text = req.body;
    res.send("Wollah " + text.name);
});

app.put('/', function (req, res) {

});

app.delete('/', function (req, res) {

})

app.listen(port, function (){
    console.log(`Listening on port ${port}`);
});