import statusCodes from "http-status-codes";
import * as query from '../db/queryHelper.js';
import db from "../db/db.js";

export function getAllBeers(req, res) {
    res.send(query.getAllBeers());
}

export function getSingleBeer(req, res) {
    if(Number.isInteger(req.params.id)){
        const beer = query.getSingleBeer(req.params.id);
        if (beer == null) {
            res.sendStatus(statusCodes.NOT_FOUND);
        } else {
            res.send(beer);
        }
    } else res.sendStatus(statusCodes.BAD_REQUEST);
}

export function addBeer(req, res) {
    res.sendStatus(query.postNewBeer(req.body));

}

export function deleteBeer(req, res) {
    if(Number.isInteger(req.params.id)){
        res.sendStatus(query.deleteBeer(req.params.id));
    } else res.sendStatus(statusCodes.BAD_REQUEST);
}

export function updateBeer(req, res) {
    res.sendStatus(query.updateBeer(req.body));
}

