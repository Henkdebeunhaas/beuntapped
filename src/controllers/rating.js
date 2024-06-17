import statusCodes from "http-status-codes";
import db from "../db/db.js";
import * as query from '../db/RatingQueries.js';
import {getAllRatingsFromUser} from "../db/RatingQueries.js";

export function getAllRatings(req, res) {
    res.send(db.prepare(query.getAllRatingsQuery).all());
}

export function getSingleUserRating(req, res) {
    res.send(db.prepare(query.getSingleRatingQuery).get(req.query.id))
}

export function getAllUserRating(req, res) {
    res.send(db.prepare(query.getAllRatingsFromUser).all(req.query.id))
}

export function insertNewRating(req, res) {
    const insert = db.prepare(query.insertNewReviewQuery);

    insert.run(
        req.body.userid,
        req.body.beerid,
        req.body.rating,
        req.body.flavourprofiles,
        req.body.description
    );
    res.sendStatus(statusCodes.CREATED);
}
