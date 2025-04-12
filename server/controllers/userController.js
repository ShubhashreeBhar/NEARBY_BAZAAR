const User = require('../models/User');
const bcrypt = require('bcryptjs');
//import Seller from '../models/Seller.js';

// Register new user
exports.registerUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get user's favorite sellers
exports.getFavoriteSellers = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId).populate('favorites');
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user.favorites);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add seller to favorites
exports.addFavoriteSeller = async (req, res) => {
  try {
    const { userId, sellerId } = req.body;
    const user = await User.findById(userId);
    if (!user.favorites.includes(sellerId)) {
      user.favorites.push(sellerId);
      await user.save();
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Remove seller from favorites
exports.removeFavoriteSeller = async (req, res) => {
  try {
    const { userId, sellerId } = req.body;
    const user = await User.findById(userId);
    user.favorites = user.favorites.filter(id => id.toString() !== sellerId);
    await user.save();
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.loginUser = async (req, res) => {
  try {
    const { phone, password } = req.body;
    const user = await User.findOne({ phone });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const isMatch = user.password === password; // Use bcrypt.compare if hashed
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid phone number or password" });
    }

    res.status(200).json({ message: "Login successful", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};