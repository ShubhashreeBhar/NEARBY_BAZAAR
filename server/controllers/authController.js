const Seller = require("../models/Seller");

const registerSeller = async (req, res) => { try { const { name, phone, location, category, items } = req.body;

pgsql
Copy
Edit
const newSeller = new Seller({
  name,
  phone,
  location,
  category,
  items,
});

await newSeller.save();
res.status(201).json({ message: "Seller registered successfully" });
} catch (error) { console.error("❌ Registration Error:", error); res.status(500).json({ error: "Failed to register seller" }); } };

module.exports = { registerSeller, };