let patients_services = require('../Services/patient.services')
const patients = require('../Data/patient.json')

function getPatient(req, res) {
    let data = patients_services.getPatient_logic();
    res.send(data);
}

function getPatientById(req, res) {
    let userId = Number(req.params.userId)
    let includes = patients.some(v => v.id === userId)
    let data = patients_services.getPatientById_logic(includes, userId);
    res.send(data);
}

function addPatient(req, res) {
    body = req.body;
    let data = patients_services.addPatient_logic(body);
    res.send(data);
}

function updateAll_patDet(req, res) {
    body = req.body;
    let userId = Number(req.params.userId)
    let includes = patients.some(v => v.id === userId)
    let data = patients_services.updateAllPatientDetails_logic(includes, userId, body);
    res.send(data);
}

function updatePatient(req, res) {
    body = req.body;
    let userId = Number(req.params.userId)
    let includes = patients.some(v => v.id === userId)
    let data = patients_services.updatePatient_logic(includes, userId, body);
    res.send(data);
}
function deletePatient(req, res) {
    let userId = Number(req.params.userId)
    let includes = patients.some(v => v.id === userId)
    let data = patients_services.deletePatient_logic(includes, userId);
    res.send(data);
}

module.exports = { getPatient, getPatientById, addPatient, updateAll_patDet, updatePatient, deletePatient }
