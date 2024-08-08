import Transaction from '../models/transactionModel.js'; // Import Transaction model
import { sendSuccessResponse, sendErrorResponse } from './../../lib/utils/responseUtils.js';

// Create Transaction function
export const createTransaction = async (req, res) => {
  try {
    const { transactionData } = req.body; // Adjust based on your data structure
    const transaction = await Transaction.create(transactionData);
    sendSuccessResponse(res, transaction, 'Transaction created successfully');
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

// Get all Transactions function
export const getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.findAll();
    sendSuccessResponse(res, transactions, 'Transactions retrieved successfully');
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

// Get Transaction by ID function
export const getTransactionById = async (req, res) => {
  try {
    const transaction = await Transaction.findByPk(req.params.id);
    if (transaction) {
      sendSuccessResponse(res, transaction, 'Transaction retrieved successfully');
    } else {
      sendErrorResponse(res, null, 'Transaction not found');
    }
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

// Update Transaction function
export const updateTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findByPk(req.params.id);
    if (transaction) {
      // Update fields based on request body
      transaction.field1 = req.body.field1 || transaction.field1; // Replace field1 with actual fields
      transaction.field2 = req.body.field2 || transaction.field2; // Replace field2 with actual fields
      const updatedTransaction = await transaction.save();
      sendSuccessResponse(res, updatedTransaction, 'Transaction updated successfully');
    } else {
      sendErrorResponse(res, null, 'Transaction not found');
    }
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

// Delete Transaction function
export const deleteTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findByPk(req.params.id);
    if (transaction) {
      await transaction.destroy();
      sendSuccessResponse(res, null, 'Transaction deleted successfully');
    } else {
      sendErrorResponse(res, null, 'Transaction not found');
    }
  } catch (error) {
    sendErrorResponse(res, error);
  }
};
