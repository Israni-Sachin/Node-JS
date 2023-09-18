const express = require('express');
const router = express.Router();
const patient_controller = require('../Controllers/patient_controllers')

router.get('/',patient_controller.getPatient)
router.get('/:userId', patient_controller.getPatientById)
router.post('/', patient_controller.addPatient)
router.put('/:userId', patient_controller.updateAll_patDet)
router.patch('/:userId', patient_controller.updatePatient)
router.delete('/:userId', patient_controller.deletePatient)
module.exports = router