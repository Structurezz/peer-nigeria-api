import express from 'express';
import { createTrade, getTrades, getTradeById, updateTrade, deleteTrade } from '../app/controllers/tradeController.js';
import { protect } from '../app/middlewares/authMiddleware.js';

const router = express.Router();

// Create a new trade (protected)
router.post('/', protect, createTrade);

// Get all trades (protected)
router.get('/', protect, getTrades);

// Get a specific trade by ID (protected)
router.get('/:id', protect, getTradeById);

// Update a trade (protected)
router.put('/:id', protect, updateTrade);

// Delete a trade (protected)
router.delete('/:id', protect, deleteTrade);

export default router;
