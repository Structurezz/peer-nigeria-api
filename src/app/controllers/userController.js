import User from '../models/userModel.js';
import jwt from 'jsonwebtoken'; // Import jwt for generating tokens
import dotenv from 'dotenv';
import { hashPassword } from './../../lib/utils/hashUtils.js'; // Import hashPassword for password hashing

dotenv.config(); // Load environment variables

// Generate JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

// Get User by ID function
export const getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id); // Use req.params.id to get the user by ID

    if (user) {
      res.json({
        _id: user.id,
        username: user.username,
        email: user.email,
        isVerified: user.isVerified,
      });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Update User function
export const updateUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id); // Use req.params.id to get the user by ID

    if (user) {
      user.username = req.body.username || user.username;
      user.email = req.body.email || user.email;
      if (req.body.password) {
        // Hash the password before saving
        user.password = await hashPassword(req.body.password);
      }

      const updatedUser = await user.save();

      res.json({
        _id: updatedUser.id,
        username: updatedUser.username,
        email: updatedUser.email,
        isVerified: updatedUser.isVerified,
        token: generateToken(updatedUser.id),
      });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const registerUser = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ success: false, message: 'Username and password are required.' });
  }

  try {
    const hashedPassword = await hashPassword(password);
    // Create user logic, assuming you have a User model
    const newUser = await User.create({ username, password: hashedPassword });
    res.status(201).json({ success: true, data: newUser });
  } catch (error) {
    res.status(500).json({ success: false, message: 'An error occurred', error });
  }
};
