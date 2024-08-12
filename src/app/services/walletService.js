
import Wallet from '../models/Wallet.js';

export const getWallet = async (userId) => {
  return await Wallet.findOne({ where: { userId } });
};

export const createWallet = async (userId) => {
  return await Wallet.create({ userId, balance: 0 });
};

export const updateWallet = async (userId, updateData) => {
  const wallet = await getWallet(userId);
  wallet.balance += updateData.amount; // Update balance based on transaction
  await wallet.save();
  return wallet;
};
