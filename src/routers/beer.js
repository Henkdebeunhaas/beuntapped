import express from 'express';
import db from '../db/db.js';
import * as beerController from '../controllers/beer.js';
const router = express.Router();

router.get('/all', beerController.getAllBeers);


export default router;