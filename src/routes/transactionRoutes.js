import express from 'express';
import { getTransactions, getTransactionById, createTransaction, updateTransaction, deleteTransaction } from '../app/controllers/transactionController.js';

const router = express.Router();

// Get all transactions
router.get('/', getTransactions);

// Get transaction by ID
router.get('/:id', getTransactionById);

// Create a new transaction
router.post('/', createTransaction);

// Update an existing transaction
router.put('/:id', updateTransaction);

// Delete a transaction
router.delete('/:id', deleteTransaction);

export default router;
