const Seller = require('../models/Seller');
const bcrypt=require('bcryptjs');

// Register new seller
exports.registerSeller = async (req, res) => {
  try {
    const seller = new Seller(req.body);
    await seller.save();
    res.status(201).json(seller);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get nearby sellers within 2km
exports.getNearbySellers = async (req, res) => {
  const { lat, lng } = req.query;
  if (!lat || !lng) return res.status(400).json({ error: 'Coordinates required' });

  const sellers = await Seller.find({
    'coordinates.lat': { $exists: true },
    'coordinates.lng': { $exists: true },
  });

  const nearby = sellers.filter(seller => {
    const dx = lat - seller.coordinates.lat;
    const dy = lng - seller.coordinates.lng;
    const distance = Math.sqrt(dx * dx + dy * dy) * 111; // approx km
    return distance <= 2;
  });

  res.json(nearby);
};

// Update location for seller
exports.updateLocation = async (req, res) => {
  try {
    const { id } = req.params;
    const { location, coordinates } = req.body;

    const updated = await Seller.findByIdAndUpdate(id, { location, coordinates }, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// Seller login

exports.loginSeller = async (req, res) => {
  try {
    const { phone, password } = req.body;
    const seller = await Seller.findOne({ phone });
    if (!seller) {
      return res.status(404).json({ error: "Seller not found" });
    }

    const isMatch = await bcrypt.compare(password, seller.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid phone number or password" });
    }

    res.json({ message: "Login successful", seller });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
  