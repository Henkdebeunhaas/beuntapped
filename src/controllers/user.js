import statusCodes from "http-status-codes";
import * as queries from '../db/queryHelper.js';

export function getUser(req, res) {
    const user = queries.getSingleUser(req.params.email);
    if (user == null) res.sendStatus(statusCodes.NOT_FOUND);
    else res.send(user);
}

export function getAllUsers(req, res) {
    res.send(queries.getAllUsers())
}

export function makeUser(req, res) {
    res.sendStatus(queries.postNewUser(req.body));
}


/*export function loginUser(req, res){
    const user = db.prepare(query.getSingleUserLoginQuery).get(req.body.email);
    if(user == null) res.sendStatus(statusCodes.NOT_FOUND);
    else{
        bcrypt.compare(req.body.password, user.password, function (err, result){
            if(result) {
                res.sendStatus(statusCodes.OK);
            }
            else res.sendStatus(statusCodes.CONFLICT)
        });
    }
}*/




