const express = require('express');
const router = express.Router();
const prescription_controller = require('../Controllers/prescription.controllers')

router
    .route('/prescription')
    .get(prescription_controller.getPrescription)
    .post(prescription_controller.addPrescription)
    
router
    .route('/prescription/:presId')
    .get(prescription_controller.getPrescriptionById)
    .delete(prescription_controller.deletePrescription)

module.exports = router