const express = require('express');
const router = express.Router();
const doctor_controller = require('../Controllers/doctor_controllers')

// router.get('/', doctor_controller.getDoctor)
// router.get('/:userId', doctor_controller.getDoctorById)
// router.post('/', doctor_controller.addDoctor)
// router.put('/:userId', doctor_controller.updateAll_docDet)
// router.patch('/:userId', doctor_controller.updateDoctor)
// router.delete('/:userId', doctor_controller.deleteDoctor)

router
    .route('/')
    .get(doctor_controller.getDoctor)
    .post(doctor_controller.addDoctor)

router
    .route('/:userId')
    .get(doctor_controller.getDoctorById)
    .put(doctor_controller.updateAll_docDet)
    .patch(doctor_controller.updateDoctor)
    .delete(doctor_controller.deleteDoctor)

module.exports = router
