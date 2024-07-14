import express from 'express';
import * as userController from '../controllers/user.js';
import bodyParser from "body-parser";

const router = express.Router();

let urlencodedParser = bodyParser.urlencoded({extended: false})

router.get('/email/:email', userController.getUser);
router.get('/', userController.getAllUsers);

//router.post('/login', userController.loginUser)
router.post('/', userController.makeUser);

const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
};

router.use(errorHandler);

export default router;