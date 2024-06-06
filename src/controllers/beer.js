import statusCodes from "http-status-codes";
import {getAllBeerQuery, addNewBeerQuery, getSingleBeerQuery} from "../db/BeerQueries.js";
import db from "../db/db.js";
//temp beer object
let beers = [{
        "brewery":"Hertog Jan",
        "style":"Blonde",
        "percentage":7
    },
    {
        "brewery":"Grolsch",
        "style":"Weizen",
        "percentage":6
    }];

export function getAllBeers(req, res){
    res.send(db.prepare(getAllBeerQuery).all());
}

export function getSingleBeer(req, res){
    const beerID = req.body.id;
    res.send(db.prepare(getSingleBeerQuery).get(beerID));
}

export function addBeer(req, res){
    const insert = db.prepare(addNewBeerQuery)
    insert.run(req.body.brewery, req.body.style, req.body.percentage);
    res.sendStatus(statusCodes.CREATED);
}

