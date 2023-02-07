const path = require('path');

const express = require('express');

const dentistController = require('../controllers/dentist');

const router = express.Router();

router.get('/', dentistController.getDentists);

router.get('/id/:dentistId', dentistController.getDentistById);

router.get('/alta-odontologos', dentistController.getAltaOdontologos);

router.post('/add', dentistController.postDentist);

router.post('/edit', dentistController.postEditDentist);

router.post('/delete', dentistController.postDeleteDentist);

module.exports = router;
