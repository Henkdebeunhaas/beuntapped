import statusCodes from "http-status-codes";
import {getAllBeerQuery, addNewBeerQuery} from "../db/BeerQueries.js";
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

}

export function getSingleBeer(req, res){

}

export function addBeer(req, res){
    const beer = req.body;
    const insert = db.prepare(addNewBeerQuery)
    insert.run(req.body.brewery, req.body.style, req.body.percentage);
    //beers.push({"brewery":beer.brewery, "style":beer.style, "percentage":beer.percentage});
    res.sendStatus(statusCodes.CREATED);
}

