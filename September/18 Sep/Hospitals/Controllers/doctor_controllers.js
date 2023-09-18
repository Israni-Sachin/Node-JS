let doctor_services = require('../Services/doctor.services')
const doctors = require('../Data/doctor.json')

function getDoctor(req, res) {
    let data = doctor_services.getDoctor_logic();
    res.send(data);
}

function getDoctorById(req, res) {
    let userId = Number(req.params.userId)
    let includes = doctors.some(v => v.id === userId)
    let data = doctor_services.getDoctorById_logic(includes, userId)
    console.log('hello');
    console.log(userId);
    console.log(typeof userId);
    res.send(data);
}

function addDoctor(req, res) {
    body = req.body;
    let data = doctor_services.addDoctor_logic(body)
    res.send(data);
}

function updateAll_docDet(req, res) {
    body = req.body;
    let userId = Number(req.params.userId)
    let includes = doctors.some(v => v.id === userId)
    let data = doctor_services.updateAll_docDet_logic(includes, userId, body)
    res.send(data);
}

function updateDoctor(req, res) {
    body = req.body;
    let userId = Number(req.params.userId)
    let includes = doctors.some(v => v.id === userId)
    let data = doctor_services.updateDoctor_logic(includes, userId, body)
    res.send(data);
}
function deleteDoctor(req, res) {
    let userId = Number(req.params.userId)
    let includes = doctors.some(v => v.id === userId)
    let data = doctor_services.deleteDoctor_logic(includes, userId);
    res.send(data);
}

module.exports = { getDoctor, getDoctorById, addDoctor, updateAll_docDet, updateDoctor, deleteDoctor }
