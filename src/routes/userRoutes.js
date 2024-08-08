import express from 'express';
import { getUserById, updateUser } from '../app/controllers/userController.js';
import { protect } from '../app/middlewares/authMiddleware.js';

const router = express.Router();

// Get user by ID (protected)
router.get('/:id', protect, getUserById);

// Update user (protected)
router.put('/:id', protect, updateUser);

export default router;
