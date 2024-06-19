import statusCodes from "http-status-codes";
import {getAllBeerQuery, addNewBeerQuery, getSingleBeerQuery, deleteSingleBeerQuery} from "../db/BeerQueries.js";
import db from "../db/db.js";

export function getAllBeers(req, res) {
    res.send(db.prepare(getAllBeerQuery).all());
}

export function getSingleBeer(req, res) {
    const beerID = req.query.id;
    res.send(db.prepare(getSingleBeerQuery).get(beerID));
}

export function addBeer(req, res) {
    const insert = db.prepare(addNewBeerQuery)
    insert.run(req.body.brewery, req.body.style, req.body.percentage);
    res.sendStatus(statusCodes.CREATED);
}

export function deleteBeer(req, res) {
    const beerID = req.query.id;
    const beer = db.prepare(getSingleBeerQuery).get(beerID);
    if(beer == null) res.sendStatus(statusCodes.NOT_FOUND);
    else {
        db.prepare(deleteSingleBeerQuery).run(beer.id);
        res.sendStatus(statusCodes.OK);
    }

}

