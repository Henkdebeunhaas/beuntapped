import express from 'express';
import * as beerController from '../controllers/beer.js';

const router = express.Router();

router.get('', beerController.getAllBeers);
router.get('/:id', beerController.getSingleBeer);
router.post('', beerController.addBeer);
router.delete('/:id', beerController.deleteBeer);
router.put('', beerController.updateBeer)

const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
};

router.use(errorHandler);

export default router;