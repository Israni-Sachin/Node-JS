const express = require('express');
const router = express.Router();

const doctor_routes = require('./doctor.routes')
const patient_routes = require('./patient.routes')

router.use('/patients',patient_routes)
router.use('/doctors',doctor_routes)

module.exports = router;