import express from "express";
import statusCodes from 'http-status-codes';
import cors from 'cors';
import beerRouter from './routers/beer.js';
import usersRouter from './routers/user.js';

const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cors());

app.use('/beer', beerRouter);
app.use('/user', usersRouter);

app.get('/', function (req, res) {
    res.send('je moeder');
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