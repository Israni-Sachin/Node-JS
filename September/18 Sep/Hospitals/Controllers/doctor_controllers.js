let doctor_services = require('../Services/doctor.services')
const doctors = require('../Data/doctor.json')

function getDoctor(req, res) {
    let data = doctor_services.getDoctor_logic();
    console.log(req.headers);
    res.send(data);
}

function getDoctorById(req, res) {
    let userId = Number(req.params.userId)
    let includes = doctors.some(v => v.id === userId)
    if (includes) {
        let data = doctor_services.getDoctorById_logic(userId)
        res.send(data);
    }
    else res.send({ status: 404, message: 'Data Not Found' });
}

function addDoctor(req, res) {
    let body = req.body;
    if (body) {
        let data = doctor_services.addDoctor_logic(body)
        res.send(data);
    }
    else res.send({ status: 404, message: 'Not Updated' });
}

function updateAll_docDet(req, res) {
    let userId = Number(req.params.userId)
    let includes = doctors.some(v => v.id === userId)
    if (includes) {
        body = req.body;
        let data = doctor_services.updateAll_docDet_logic(userId, body)
        res.send(data);
    }
    else res.send({ status: 404, message: 'Not Updated' });
}

function updateDoctor(req, res) {
    let userId = Number(req.params.userId)
    let includes = doctors.some(v => v.id === userId)
    if (includes) {
        body = req.body;
        let data = doctor_services.updateDoctor_logic(userId, body)
        res.send(data);
    }
    else res.send({ status: 404, message: 'Not Updated' });
}
function deleteDoctor(req, res) {
    let userId = Number(req.params.userId)
    let includes = doctors.some(v => v.id === userId)
    if (includes) {
        let data = doctor_services.deleteDoctor_logic(userId);
        res.send(data);
    }
    else res.send({ status: 404, message: 'Error While Deleting' });
}

module.exports = { getDoctor, getDoctorById, addDoctor, updateAll_docDet, updateDoctor, deleteDoctor }
