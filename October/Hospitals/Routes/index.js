const express = require('express');
const router = express.Router();

// ----------- Routes

const doctorRoutes = require('./doctor.routes')
const patientRoutes = require('./patient.routes')

// ----------- Middle-wares

const tokenForPatient = require('../middlewares/patient.middleware')
const tokenForDoctor = require('../middlewares/doctor.middleware')


router.use('/patients', tokenForPatient, patientRoutes)
router.use('/doctors', tokenForDoctor, doctorRoutes)

module.exports = router;