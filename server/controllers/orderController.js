const Order = require("../models/Order");

exports.placeOrder = async (req, res) => {
  try {
    const { userId, seller, items } = req.body;
    const order = new Order({ userId, seller, items });
    await order.save();
    res.status(201).json({ message: "Order placed", order });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getUserOrders = async (req, res) => {
  try {
    const { userId } = req.params;
    const orders = await Order.find({ userId }).populate("seller");
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getSellerOrders = async (req, res) => {
  try {
    const { sellerId } = req.params;
    const orders = await Order.find({ seller: sellerId }).populate("userId");
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
