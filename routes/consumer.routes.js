const path = require('path');

const express = require('express');

const consumerController = require('../controllers/consumer');

const router = express.Router();

router.get('/', consumerController.getIndex);

// router.get('/products', consumerController.getProducts);

// router.get('/products/:productId', consumerController.getProduct);

// router.get('/cart', consumerController.getCart);

// router.post('/cart', consumerController.postCart);

// router.post('/cart-delete-item', consumerController.postCartDeleteProduct);

// router.post('/create-order', consumerController.postOrder);

// router.get('/orders', consumerController.getOrders);

module.exports = router;
