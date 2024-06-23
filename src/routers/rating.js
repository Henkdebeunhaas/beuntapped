import express from 'express';
//import db from '../db/db.js';
import * as ratingController from '../controllers/rating.js';
const router = express.Router();

router.get('/all', ratingController.getAllRatings);

//these are not used in the application, didn't have enough time to implement.
//router.get('/singleuser', ratingController.getSingleUserRating);
//router.get('/alluser', ratingController.getAllUserRating);

router.post('/add', ratingController.insertNewRating);

const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
};

router.use(errorHandler);

export default router;