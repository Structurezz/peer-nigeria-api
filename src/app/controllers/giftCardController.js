import GiftCard from '../models/giftCardModel.js'; // Import GiftCard model
import { sendSuccessResponse, sendErrorResponse } from './../../lib/utils/responseUtils.js';

// Create Gift Card function
export const createGiftCard = async (req, res) => {
  try {
    const { giftCardData } = req.body; // Adjust based on your data structure
    const giftCard = await GiftCard.create(giftCardData);
    sendSuccessResponse(res, giftCard, 'Gift card created successfully');
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

// Get all Gift Cards function
export const getGiftCards = async (req, res) => {
  try {
    const giftCards = await GiftCard.findAll();
    sendSuccessResponse(res, giftCards, 'Gift cards retrieved successfully');
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

// Get Gift Card by ID function
export const getGiftCardById = async (req, res) => {
  try {
    const giftCard = await GiftCard.findByPk(req.params.id);
    if (giftCard) {
      sendSuccessResponse(res, giftCard, 'Gift card retrieved successfully');
    } else {
      sendErrorResponse(res, null, 'Gift card not found');
    }
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

// Update Gift Card function
export const updateGiftCard = async (req, res) => {
  try {
    const giftCard = await GiftCard.findByPk(req.params.id);
    if (giftCard) {
      // Update fields based on request body
      giftCard.field1 = req.body.field1 || giftCard.field1; // Replace field1 with actual fields
      giftCard.field2 = req.body.field2 || giftCard.field2; // Replace field2 with actual fields
      const updatedGiftCard = await giftCard.save();
      sendSuccessResponse(res, updatedGiftCard, 'Gift card updated successfully');
    } else {
      sendErrorResponse(res, null, 'Gift card not found');
    }
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

// Delete Gift Card function
export const deleteGiftCard = async (req, res) => {
  try {
    const giftCard = await GiftCard.findByPk(req.params.id);
    if (giftCard) {
      await giftCard.destroy();
      sendSuccessResponse(res, null, 'Gift card deleted successfully');
    } else {
      sendErrorResponse(res, null, 'Gift card not found');
    }
  } catch (error) {
    sendErrorResponse(res, error);
  }
};
