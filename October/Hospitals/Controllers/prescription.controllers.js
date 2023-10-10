let prescriptionServices = require('../Services/prescription.services')
let { successResponse, errorResponse } = require('../helpers/http_response')


const getPrescription = async (req,res) => {
    try {
        let data = await prescriptionServices.getPrescription();
        successResponse(res, 'All Prescription Fetched Successfully', data);
    } catch (error) {
        console.log(error);
        errorResponse(res, 'Error while getting Prescription', error.status)
    }
}

const getPrescriptionById = async (req,res) => {
    try {
        let userId = Number(req.params.userId)
        let data = await prescriptionServices.getPrescriptionById(userId);
        successResponse(res, 'Prescription Fetched Successfully', data);
    } catch (error) {
        console.log(error);
        errorResponse(res, 'Error while getting Prescription', error.status)
    }
}

const addPrescription = async (req,res) => {
    try {
        let body = req.body;
        let data = await prescriptionServices.addPrescription(body,req);
        successResponse(res, 'Prescription added successfully', data);
    } catch (error) {
        console.log(error);
        errorResponse(res, 'Error while getting Prescription', error.status)
    }
}

const deletePrescription = async (req,res) => {
    try {
        let userId = req.params.userId;
        let result = await prescriptionServices.deletePrescription(userId);
        successResponse(res, 'Prescription deleted successfully', result);
    } catch (error) {
        console.log(error);
        errorResponse(res, 'Error while getting Prescription', error.status)
    }
}

module.exports = { getPrescription, getPrescriptionById, addPrescription, deletePrescription }