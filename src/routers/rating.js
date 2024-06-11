import express from 'express';
//import db from '../db/db.js';
import * as ratingController from '../controllers/rating.js';
const router = express.Router();

router.get('/all', ratingController.getAllRatings);



router.post('/add', ratingController.insertNewRating);

export default router;