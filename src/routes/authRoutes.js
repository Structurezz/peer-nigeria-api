import express from 'express';
import { registerUser, loginUser, getUserProfile } from '../app/controllers/authController.js';
import { protect } from '../app/middlewares/authMiddleware.js';

const router = express.Router();

// User registration route
router.post('/register', registerUser);

// User login route
router.post('/login', loginUser);

// Get user profile route (protected)
router.get('/profile', protect, getUserProfile);

export default router;
