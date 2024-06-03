import statusCodes from "http-status-codes";
import * as db from '../db/db.js';

const users = [{
    "username":"Henkdebeunhaas",
    "password":"Very Good"
}];

export function getUser(req, res){

}

export function getAllUsers(req, res){
    res.json(users);
}

export function makeUser(req, res){
    const user = req.body;
    users.push({"username":user.username, "password":user.password});
    res.sendStatus(statusCodes.CREATED);
}


