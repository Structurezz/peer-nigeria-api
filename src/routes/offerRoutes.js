
import {Router} from 'express';
import { createOfferController, getOffersController, getOfferByIdController } from '../app/controllers/offerController.js';
import { protect } from '../app/middlewares/authMiddleware.js';

const router = Router();

router.post('/create', createOfferController);
router.get('/', getOffersController);
router.get('/:id', getOfferByIdController);

export default router;
