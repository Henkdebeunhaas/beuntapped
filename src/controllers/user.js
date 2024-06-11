import statusCodes from "http-status-codes";
import db from "../db/db.js";
import * as query from '../db/UserQueries.js';
import bcrypt from 'bcrypt';

export function getUser(req, res){
    //const user = ;
    res.send(db.prepare(query.singleUserQuery).get(req.query.email));
}

export function getAllUsers(req, res){
    res.send(db.prepare(query.getAllUsersQuery).all())
}

export function makeUser(req, res){
    const insert = db.prepare(query.createUserQuery)

    bcrypt.hash(req.body.password, 2, function (err, result){
        insert.run(
            req.body.email,
            req.body.username,
            result
        );
    });
    res.sendStatus(statusCodes.CREATED);
}

export function loginUser(req, res){
    const user = db.prepare(query.getSingleUserLoginQuery).get(req.body.email);
    if(user == null) res.sendStatus(statusCodes.NOT_FOUND);
    else{
        bcrypt.compare(req.body.password, user.password, function (err, result){
            if(result) res.sendStatus(statusCodes.OK)
            else res.sendStatus(statusCodes.IM_A_TEAPOT)
        });
    }
}




