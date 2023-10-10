const express = require('express');
const router = express.Router();
const doctor_controller = require('../Controllers/doctor.controllers')
const prescription_controller = require('../Controllers/prescription.controllers')

router
    .route('/')
    .get(doctor_controller.getDoctor)
    .post(doctor_controller.addDoctor)

router
    .route('/:userId')
    .get(doctor_controller.getDoctorById)
    .patch(doctor_controller.updateDoctor)
    .delete(doctor_controller.deleteDoctor)

router
    .route('/prescription')
    .get(prescription_controller.getPrescription)
    .post(prescription_controller.addPrescription)
    
router
    .route('/prescription/:presId')
    .get(prescription_controller.getPrescriptionById)
    .delete(prescription_controller.deletePrescription)

module.exports = router
