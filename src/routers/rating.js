import express from 'express';
//import db from '../db/db.js';
import * as ratingController from '../controllers/rating.js';
const router = express.Router();

router.get('/allratings', ratingController.getAllRatings);
router.get('/singleuserrating', ratingController.getSingleUserRating);
router.get('/alluserratings', ratingController.getAllUserRating);

router.post('/add', ratingController.insertNewRating);

export default router;