const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/register', userController.registerUser);
router.get('/favorites/:userId', userController.getFavoriteSellers);
router.post('/favorites/add', userController.addFavoriteSeller);
router.post('/favorites/remove', userController.removeFavoriteSeller);
router.post('/login', userController.loginUser);

module.exports = router;
