import db from "../db/db.js";
import * as ratingQuery from "./RatingQueries.js";
import * as userQuery from "./UserQueries.js";
import * as beerQuery from "./BeerQueries.js";
import statusCodes from "http-status-codes";
import bcrypt from "bcrypt";
import {getSingleBeerQuery} from "./BeerQueries.js";

//Rating queries
export function getAllRatings() {
    const ratings = db.prepare(ratingQuery.beerRatingInnerJoinQuery).all();
    console.log(ratings);
    return ratings;
}

export function getSingleUserRating(userid) {
    return db.prepare(ratingQuery.getSingleRatingQuery).get(userid);
}

export function getAllRatingsFromUser(userid) {
    return db.prepare(ratingQuery.getAllRatingsFromUser).all(userid);
}

export function insertNewRating(reqBody) {
    console.log(reqBody);
    if (reqBody.userid == null || reqBody.beerid == null || reqBody.rating == null || reqBody.flavourprofiles == null || reqBody.description == null) {
        return statusCodes.BAD_REQUEST;
    } else {
        if (db.prepare(ratingQuery.insertNewReviewQuery).run(
            reqBody.userid,
            reqBody.beerid,
            reqBody.rating,
            reqBody.flavourprofiles,
            reqBody.description
        )) return statusCodes.CREATED;
        else return statusCodes.IM_A_TEAPOT;
    }
}

//user queries
export function postNewUser(reqBody) {
    const insert = db.prepare(userQuery.createUserQuery);
    if (db.prepare(userQuery.singleUserQuery).get(reqBody.email) != undefined) {
        return statusCodes.CONFLICT;
    } else {
        bcrypt.hash(reqBody.password, 2, function (err, result) {
            insert.run(
                reqBody.email,
                reqBody.username,
                result
            );
        });
        return statusCodes.CREATED;
    }
}

export function getAllUsers() {
    return db.prepare(userQuery.getAllUsersQuery).all();
}

export function getSingleUser(email) {
    return db.prepare(userQuery.singleUserQuery).get(email);
}

//beer queries
export function getAllBeers() {
    return db.prepare(beerQuery.getAllBeerQuery).all()
}

export function getSingleBeer(id) {
    return db.prepare(beerQuery.getSingleBeerQuery).get(id);
}

export function postNewBeer(beer) {
    const duplicateCheck = db.prepare(beerQuery.getBeerOnStyleQuery).get(beer.brewery, beer.style);
    if (duplicateCheck != null) {
        return statusCodes.CONFLICT;
    }
    const insert = db.prepare(beerQuery.addNewBeerQuery)
    insert.run(beer.brewery, beer.style, beer.percentage);
    return statusCodes.CREATED;
}

export function deleteBeer(id) {
    const beer = db.prepare(beerQuery.getSingleBeerQuery).get(id);
    if (beer == null) return statusCodes.NOT_FOUND;
    else {
        db.prepare(beerQuery.deleteSingleBeerQuery).run(id);
        return statusCodes.OK;
    }
}

export function updateBeer(reqBody) {
    const beer = db.prepare(beerQuery.getSingleBeerQuery).get(reqBody.id);
    if (beer == null || beer == undefined) return statusCodes.NOT_FOUND;

    const update = db.prepare(beerQuery.updateBeerQuery);
    if (Number.isInteger(reqBody.percentage)) {
        if (update.run(
            reqBody.percentage,
            reqBody.id
        )) {
            return statusCodes.OK;
        }
    } return statusCodes.BAD_REQUEST


}
