const path = require('path');

const express = require('express');

const consumerController = require('../controllers/consumer');

const router = express.Router();

router.get('/', consumerController.getIndex);

module.exports = router;
