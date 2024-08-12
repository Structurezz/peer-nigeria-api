import Wallet from '../models/walletModel.js'; // Adjust the path as necessary

// Controller to get the wallet details
export const getWallet = async (req, res, next) => {
  try {
    const wallet = await Wallet.findByPk(req.user.id); // Example logic
    if (!wallet) {
      return res.status(404).json({ success: false, message: 'Wallet not found' });
    }
    res.status(200).json({ success: true, data: wallet });
  } catch (error) {
    next(error);
  }
};

// Controller to update the wallet details
export const updateWallet = async (req, res, next) => {
  try {
    const wallet = await Wallet.findByPk(req.user.id); // Example logic
    if (!wallet) {
      return res.status(404).json({ success: false, message: 'Wallet not found' });
    }

    // Example update logic (adjust based on your actual requirements)
    await wallet.update(req.body);
    res.status(200).json({ success: true, data: wallet });
  } catch (error) {
    next(error);
  }
};
