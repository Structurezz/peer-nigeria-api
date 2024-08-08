import express from 'express';
import { createGiftCard, getGiftCards, getGiftCardById, updateGiftCard, deleteGiftCard } from '../app/controllers/giftCardController.js';
import { protect } from '../app/middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', protect, createGiftCard);

router.get('/', protect, getGiftCards);

router.get('/:id', protect, getGiftCardById);

router.put('/:id', protect, updateGiftCard);

router.delete('/:id', protect, deleteGiftCard);

export default router;
