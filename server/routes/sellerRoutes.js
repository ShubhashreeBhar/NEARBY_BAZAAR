const express = require('express');
const router = express.Router();
const sellerController = require('../controllers/sellerController');

router.post('/register', sellerController.registerSeller);
router.get('/nearby', sellerController.getNearbySellers);
router.put('/update-location/:id', sellerController.updateLocation);

router.post("/login", sellerController.loginSeller);
router.get("/all", async (req, res) =>
     { try { const sellers = await Seller.find({}, "name _id");
     res.json(sellers); } 
    catch (err) 
    { res.status(500).json({ error: err.message }); } });

module.exports = router;
