import Offer from '../models/offerModel.js';

export const createOffer = async (userId, offerData) => {
  try {
    const offer = await Offer.create({ ...offerData, userId });
    return offer;
  } catch (error) {
    throw new Error('Error creating offer: ' + error.message);
  }
};

export const getOffers = async (filters) => {
  try {
    const offers = await Offer.findAll({ where: filters });
    return offers;
  } catch (error) {
    throw new Error('Error fetching offers: ' + error.message);
  }
};

export const getOfferById = async (offerId) => {
  try {
    const offer = await Offer.findByPk(offerId);
    if (!offer) {
      throw new Error('Offer not found');
    }
    return offer;
  } catch (error) {
    throw new Error('Error fetching offer: ' + error.message);
  }
};
