let doctor_services = require('../Services/doctor.services')
let { successResponse, errorResponse } = require('../../../../helpers/http_response');

async function getDoctor(req, res) {
    try {
        let data = await doctor_services.getDoctor();
        successResponse(res, "All Doctors fetched successfully", data);
    } catch (error) {
        console.log(error);
        errorResponse(res, 'Error while getting doctors', error.status)
    }
}

async function getDoctorById(req, res) {
    try {
        let userId = Number(req.params.userId)
        let data = await doctor_services.getDoctorById(userId)
        successResponse(res, "Doctor fetched successfully", data);
    } catch (error) {
        console.log(error);
        errorResponse(res, 'Error while getting doctor', error.status)
    }

}

async function addDoctor(req, res) {
    try {
        let body = req.body;
        let data = await doctor_services.addDoctor(body)
        successResponse(res, "Doctor added successfully", data);
    } catch (error) {
        console.log(error);
        errorResponse(res, 'Error while getting student', error.status);
    }

}

async function updateDoctor(req, res) {
    try {
        body = req.body;
        let userId = Number(req.params.userId)
        let data = await doctor_services.updateDoctor(userId, body);
        successResponse(res, 'Doctor updated successfully', data)
    } catch (error) {
        console.log(error);
        errorResponse(res, 'Error while updating doctor', error.status)
    }
}

async function deleteDoctor(req, res) {
    try {
        let userId = Number(req.params.userId)
        let data = await doctor_services.deleteDoctor(userId);
        successResponse(res, "Doctor deleted successfully", data);
    } catch (error) {
        console.log(error);
        errorResponse(res, 'Error while getting student', error.status);
    }
}

module.exports = { getDoctor, getDoctorById, addDoctor, updateDoctor, deleteDoctor }
