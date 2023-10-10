let patientServices = require('../Services/patient.services')
let { successResponse, errorResponse } = require('../helpers/http_response')

async function getPatient(req, res) {
    try {
        let data = await patientServices.getPatient();
        successResponse(res, 'All Patients Fetched Successfully', data)
    } catch (error) {
        console.log(error);
        errorResponse(res, 'Error while getting patient', error.status)
    }
}

async function getPatientById(req, res) {
    try {
        let userId = Number(req.params.userId)
        let data = await patientServices.getPatientById(userId);
        successResponse(res, 'Patient Fetched Successfully', data)
    }

    catch (error) {
        console.log(error);
        errorResponse(res, 'Error while getting patient', error.status)
    }
}

async function addPatient(req, res) {

    try {
        let body = req.body;
        let data = await patientServices.addPatient(body);
        successResponse(res, 'Patient added successfully', data)
    } catch (error) {
        console.log(error);
        errorResponse(res, 'Error while adding patient', error.status)
    }


}
async function updatePatient(req, res) {
    try {
        body = req.body;
        let userId = Number(req.params.userId)
        let data = await patientServices.updatePatient(userId, body);
        successResponse(res, 'Patient updated successfully', data)
    } catch (error) {
        console.log(error);
        errorResponse(res, 'Error while updating patient', error.status)
    }

}
async function deletePatient(req, res) {
    try {
        let userId = req.params.userId;
        let result = await patientServices.deletePatient(userId);
        successResponse(res, 'Patient deleted successfully', result)
    } catch (error) {
        console.log(error);
        errorResponse(res, 'Error while deleting student', error.status)
    }
}

module.exports = { getPatient, getPatientById, addPatient, updatePatient, deletePatient }
