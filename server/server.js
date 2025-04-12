
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const sellerRoutes = require("./routes/sellerRoutes");
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require("./routes/orderRoutes");
const app = express();
dotenv.config();
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/sellers", sellerRoutes);
app.use('/api/users', userRoutes);
app.use("/api/orders", orderRoutes);

// Routes placeholder
app.get("/", (req, res) => {
  res.send("Nearby Bazar API is running...");
});

// Example: Uncomment when routes are created
// app.use("/api/auth", require("./routes/authRoutes"));
// app.use("/api/sellers", require("./routes/sellerRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
