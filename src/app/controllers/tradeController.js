import Trade from '../models/tradeModel.js'; // Import Trade model
import { sendSuccessResponse, sendErrorResponse } from './../../lib/utils/responseUtils.js';

// Create Trade function
export const createTrade = async (req, res) => {
  try {
    const { tradeData } = req.body; // Adjust based on your data structure
    const trade = await Trade.create(tradeData);
    sendSuccessResponse(res, trade, 'Trade created successfully');
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

// Get all Trades function
export const getTrades = async (req, res) => {
  try {
    const trades = await Trade.findAll();
    sendSuccessResponse(res, trades, 'Trades retrieved successfully');
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

// Get Trade by ID function
export const getTradeById = async (req, res) => {
  try {
    const trade = await Trade.findByPk(req.params.id);
    if (trade) {
      sendSuccessResponse(res, trade, 'Trade retrieved successfully');
    } else {
      sendErrorResponse(res, null, 'Trade not found');
    }
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

// Update Trade function
export const updateTrade = async (req, res) => {
  try {
    const trade = await Trade.findByPk(req.params.id);
    if (trade) {
      // Update fields based on request body
      trade.field1 = req.body.field1 || trade.field1; // Replace field1 with actual fields
      trade.field2 = req.body.field2 || trade.field2; // Replace field2 with actual fields
      const updatedTrade = await trade.save();
      sendSuccessResponse(res, updatedTrade, 'Trade updated successfully');
    } else {
      sendErrorResponse(res, null, 'Trade not found');
    }
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

// Delete Trade function
export const deleteTrade = async (req, res) => {
  try {
    const trade = await Trade.findByPk(req.params.id);
    if (trade) {
      await trade.destroy();
      sendSuccessResponse(res, null, 'Trade deleted successfully');
    } else {
      sendErrorResponse(res, null, 'Trade not found');
    }
  } catch (error) {
    sendErrorResponse(res, error);
  }
};
