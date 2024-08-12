
import express from 'express';
import { getWallet, updateWallet } from '../app/controllers/walletController.js';
import { protect } from '../app/middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', protect, getWallet);
router.put('/', protect, updateWallet);

export default router;
