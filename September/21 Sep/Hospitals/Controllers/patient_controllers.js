let patients_services = require('../Services/patient.services')
const patients = require('../Data/patient.json')

function getPatient(req, res) {
    let data = patients_services.getPatient_logic();
    res.send(data);
}

function getPatientById(req, res) {
    let userId = Number(req.params.userId)
    let includes = patients.some(v => v.id === userId)

    if (includes) {
        let data = patients_services.getPatientById_logic(userId);
        res.send(data);
    }

    else res.send({ status: 404, message: 'Data Not Found' });
}

function addPatient(req, res) {
    body = req.body;

    if (body) {
        let data = patients_services.addPatient_logic(body);
        res.send(data);
    }

    else res.send({ status: 404, message: 'Not Updated' });
}

function updateAll_patDet(req, res) {
    let userId = Number(req.params.userId)
    let includes = patients.some(v => v.id === userId)

    if (includes) {
        body = req.body;
        let data = patients_services.updateAllPatientDetails_logic(userId, body);
        res.send(data);
    }

    else res.send({ status: 404, message: 'Not Updated' });
}

function updatePatient(req, res) {
    body = req.body;
    let userId = Number(req.params.userId)

    if (includes) {
        let includes = patients.some(v => v.id === userId)
        let data = patients_services.updatePatient_logic(userId, body);
        res.send(data);
    }

    else res.send({ status: 404, message: 'Not Updated' });
}
function deletePatient(req, res) {
    let userId = Number(req.params.userId)
    let includes = patients.some(v => v.id === userId)

    if (includes) {
        let data = patients_services.deletePatient_logic(userId);
        res.send(data);
    }

    else res.send({ status: 404, message: 'Error While Deleting' });
}

module.exports = { getPatient, getPatientById, addPatient, updateAll_patDet, updatePatient, deletePatient }
