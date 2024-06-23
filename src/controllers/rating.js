import statusCodes from "http-status-codes";
import db from "../db/db.js";
import * as query from '../db/RatingQueries.js';
import {getAllRatingsFromUser} from "../db/RatingQueries.js";

export function getAllRatings(req, res) {
    res.send(db.prepare(query.beerRatingInnerJoinQuery).all());
}

export function getSingleUserRating(req, res) {
    res.send(db.prepare(query.getSingleRatingQuery).get(req.query.id))
}

export function getAllUserRating(req, res) {
    res.send(db.prepare(query.getAllRatingsFromUser).all(req.query.id))
}

export function insertNewRating(req, res) {
    const insert = db.prepare(query.insertNewReviewQuery);
    const body = req.body;
    if (body.userid == null || body.beerid == null || body.rating == null || body.flavourprofiles == null || body.description == null) {
        res.sendStatus(statusCodes.BAD_REQUEST);
    } else {
        insert.run(
            req.body.userid,
            req.body.beerid,
            req.body.rating,
            req.body.flavourprofiles,
            req.body.description
        );
        res.sendStatus(statusCodes.CREATED);
    }
}
