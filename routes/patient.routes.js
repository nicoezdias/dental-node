const path = require('path');

const express = require('express');

const patientController = require('../controllers/patient');

const router = express.Router();

router.get('/', patientController.getPatients);

router.get('/id/:patientId', patientController.getPatientById);

router.get('/alta-pacientes', patientController.getAltaPacientes);

router.post('/add', patientController.postPatient);

router.post('/edit', patientController.postEditPatient);

router.post('/delete', patientController.postDeletePatient);

module.exports = router;
