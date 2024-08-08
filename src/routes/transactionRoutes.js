import express from 'express';
import { getTransactions, getTransactionById, createTransaction } from '../app/controllers/transactionController.js';
import { protect } from '../app/middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', protect, getTransactions);


router.get('/:id', protect, getTransactionById);

router.put('/:id', updateTransaction);

router.post('/', protect, createTransaction);

export default router;
