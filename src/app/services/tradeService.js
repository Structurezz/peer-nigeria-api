import Trade from '../models/Trade.js';
import Offer from '../models/Offer.js';

export const createTrade = async (userId, tradeData) => {
  const offer = await Offer.findByPk(tradeData.offerId);
  if (!offer) {
    throw new Error('Offer not found');
  }
  
  const trade = await Trade.create({
    userId,
    offerId: tradeData.offerId,
    amount: tradeData.amount,
    price: offer.price,
    status: 'pending',
  });

  // Update offer status or other logic as needed
  return trade;
};

export const getTrades = async (userId) => {
  return await Trade.findAll({ where: { userId } });
};
