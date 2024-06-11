import statusCodes from "http-status-codes";
import db from "../db/db.js";
import * as query from '../db/RatingQueries.js';

export function getAllRatings(req, res) {

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
