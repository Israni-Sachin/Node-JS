const express = require('express');
const router = express.Router();
const patient_controller = require('../Controllers/patient_controllers')

router.route('/')
    .get(patient_controller.getPatient)
    .post(patient_controller.addPatient)
router.route('/:userId')
    .get(patient_controller.getPatientById)
    .put(patient_controller.updateAll_patDet)
    .patch(patient_controller.updatePatient)
    .delete(patient_controller.deletePatient)

module.exports = router