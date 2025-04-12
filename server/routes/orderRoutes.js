const express = require("express"); 
const router = express.Router(); 
const orderController = require("../controllers/orderController");

router.post("/place", orderController.placeOrder); 
router.get("/user/:userId", orderController.getUserOrders); 
router.get("/seller/:sellerId", orderController.getSellerOrders);

module.exports = router;