const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  { user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
   seller: { type: mongoose.Schema.Types.ObjectId, ref: "Seller", required: true }, 
   items: [{ type: String }], address: { type: String }, 
   status: { type: String, default: "Pending" }, 
   createdAt: { type: Date, default: Date.now } });

module.exports = mongoose.model("Order", orderSchema);