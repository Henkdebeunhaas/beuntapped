import statusCodes from "http-status-codes";
import db from "../db/db.js";
import * as query from '../db/RatingQueries.js';
import {getAllRatingsFromUser} from "../db/RatingQueries.js";
import * as queries from "../db/queryHelper.js";

export function getAllRatings(req, res) {
    res.send(queries.getAllRatings(req));
}

export function getSingleUserRating(req, res) {
    res.send(queries.getSingleUserRating(req.query.id));
}

export function getAllUserRating(req, res) {
    res.send(db.prepare(query.getAllRatingsFromUser).all(req.query.id))
}

export function insertNewRating(req, res) {
    res.sendStatus(queries.insertNewRating(req.body));
}
