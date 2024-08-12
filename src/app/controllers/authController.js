import { hashPassword, comparePasswords } from './../../lib/utils/hashUtils.js';
import { generateToken } from './../../lib/utils/jwt.js';
import { sendSuccessResponse, sendErrorResponse } from './../../lib/utils/responseUtils.js';
import { isValidEmail, isValidPassword } from './../../lib/utils/validationUtils.js';
import User from '../models/userModel.js';

// Register function
export const registerUser = async (req, res) => {
  try {
    const { email, password, username } = req.body; // Extract username from the request body

    // Check if username is provided
    if (!username) {
      return res.status(400).json({ success: false, message: "Username is required" });
    }

    // Validate email and password
    if (!isValidEmail(email) || !isValidPassword(password)) {
      return sendErrorResponse(res, null, 'Invalid email or password');
    }

    // Check if user already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return sendErrorResponse(res, null, 'User already exists');
    }

    // Hash the password
    const hashedPassword = await hashPassword(password);

    // Create a new user
    const newUser = await User.create({ email, password: hashedPassword, username });

    // Send success response
    sendSuccessResponse(res, { user: newUser }, 'User registered successfully');
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

// Error handling function


// Login function
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Properly check if email and password are provided
    if (!email || !password) {
      return res.status(400).json({ success: false, message: "Email and password are required" });
    }

    // Validate email and password
    if (!isValidEmail(email) || !isValidPassword(password)) {
      return sendErrorResponse(res, null, 'Invalid email or password');
    }

    // Find user by email
    const user = await User.findOne({ where: { email } });

    // Check if user exists and password matches
    if (!user || !(await comparePasswords(password, user.password))) {
      return sendErrorResponse(res, null, 'Invalid email or password');
    }

    // Generate JWT token
    const token = generateToken(user.id);

    // Send success response with token
    sendSuccessResponse(res, { token }, 'Login successful');
  } catch (error) {
    sendErrorResponse(res, error);
  }
};


// Get User Profile function
export const getUserProfile = async (req, res) => {
  try {
    const userId = req.user.id; // Assuming user ID is set in req.user by authentication middleware

    // Fetch user profile from the database
    const user = await User.findByPk(userId);

    if (!user) {
      return sendErrorResponse(res, null, 'User not found');
    }

    // Send success response with user data
    sendSuccessResponse(res, { user }, 'User profile retrieved successfully');
  } catch (error) {
    sendErrorResponse(res, error);
  }
};
