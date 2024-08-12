// src/app/controllers/offerController.js
import { createOffer, getOffers, getOfferById } from '../services/offerServices.js';

export const createOfferController = async (req, res, next) => {
  try {
    const offer = await createOffer(req.user.id, req.body);
    res.status(201).json({ success: true, data: offer });
  } catch (error) {
    next(error);
  }
};

export const getOffersController = async (req, res, next) => {
  try {
    const offers = await getOffers(req.query);
    res.status(200).json({ success: true, data: offers });
  } catch (error) {
    next(error);
  }
};

export const getOfferByIdController = async (req, res, next) => {
  try {
    const offer = await getOfferById(req.params.id);
    res.status(200).json({ success: true, data: offer });
  } catch (error) {
    next(error);
  }
};
