let patients = require('../data/patient.json')
let fs = require('fs');

function getPatient(req, res) {
    res.send(patients)
}

function getPatientById(req, res) {
    let userId = Number(req.params.userId)
    let includes = patients.some(v=>v.id === userId)
    if (includes) {
        res.status(200).json({ status: 200, message: 'OK', data: patients.find(v => v.id == userId) });
    }
    else res.status(404).json({ status: 404, message: 'Data Not Found'});
}

function addPatient(req, res) {
    body = req.body;
    if (body) {
        obj = { id: patients.length + 1, ...body }
        obj.id = patients.length + 1
        patients.push(obj);
        fs.writeFile('./data/patient.json', JSON.stringify(patients), (err) => console.log(err))
        res.status(200).json({ status: 200, message: 'OK', data: obj });
    }
    else res.status(404).json({ status: 404, message: 'Not Updated' });
}

function updateAll_patDet(req, res) {
    let userId = Number(req.params.userId)
    if (userId) {
        body = req.body;
        let getIDindex = patients.indexOf(patients.find(v => v.id == userId));
        obj = { id: userId, ...body, id: userId }
        patients[getIDindex] = obj
        fs.writeFile('./data/patient.json', JSON.stringify(patients), (err) => console.log(err))
        res.status(200).json({ status: 200, message: 'OK', data: obj });
    }
    else res.status(404).json({ status: 404, message: 'Not Updated' });
}

function updatePatient(req, res) {
    let userId = Number(req.params.userId)
    if (userId) {
        body = req.body;
        let getIDindex = patients.indexOf(patients.find(val => val.id == userId))
        obj = { ...patients[getIDindex], ...body, id: userId }
        patients[getIDindex] = obj
        fs.writeFile('./data/patient.json', JSON.stringify(patients), (err) => console.log(err))
        res.status(200).json({ status: 200, message: 'OK', data: obj });
    }
    else res.status(404).json({ status: 404, message: 'Not Updated' });
}
function deletePatient(req, res) {
    let userId = req.params.userId
    if (userId) {
        let del = patients.filter(v => v.id == userId);
        patients = patients.filter(v => v.id != userId);
        fs.writeFile('./data/patient.json', JSON.stringify(patients), (err) => console.log(err))
        res.status(200).json({ status: 200, message: 'OK', data: del });
    }
    else res.status(404).json({ status: 404, message: 'Not Updated' });
}

module.exports = { getPatient, getPatientById, addPatient, updateAll_patDet, updatePatient, deletePatient }
