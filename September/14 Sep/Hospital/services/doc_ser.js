let doctors = require('../data/doctor.json')
let fs = require('fs');

function getDoctor(req, res) {
    res.send(doctors)
}

function getDoctorById(req, res) {
    let userId = Number(req.params.userId)
    let includes = doctors.some(v=>v.id === userId)
    if (includes) {
        res.status(200).json({ status: 200, message: 'OK', data: doctors.find(v => v.id == userId) });
    }
    else res.status(404).json({ status: 404, message: 'Data Not Found'});
}

function addDoctor(req, res) {
    body = req.body;
    if (body) {
        obj = { id: doctors.length + 1, ...body }
        obj.id = doctors.length + 1
        doctors.push(obj);
        fs.writeFile('./data/patient.json', JSON.stringify(doctors), (err) => console.log(err))
        res.status(200).json({ status: 200, message: 'OK', data: obj });
    }
    else res.status(404).json({ status: 404, message: 'Not Updated' });
}

function updateAll_docDet(req, res) {
    let userId = Number(req.params.userId)
    if (userId) {
        body = req.body;
        let getIDindex = doctors.indexOf(doctors.find(v => v.id == userId));
        obj = { id: userId, ...body, id: userId }
        doctors[getIDindex] = obj
        fs.writeFile('./data/patient.json', JSON.stringify(doctors), (err) => console.log(err))
        res.status(200).json({ status: 200, message: 'OK', data: obj });
    }
    else res.status(404).json({ status: 404, message: 'Not Updated' });
}

function updateDoctor(req, res) {
    let userId = Number(req.params.userId)
    if (userId) {
        body = req.body;
        let getIDindex = doctors.indexOf(doctors.find(val => val.id == userId))
        obj = { ...doctors[getIDindex], ...body, id: userId }
        doctors[getIDindex] = obj
        fs.writeFile('./data/patient.json', JSON.stringify(doctors), (err) => console.log(err))
        res.status(200).json({ status: 200, message: 'OK', data: obj });
    }
    else res.status(404).json({ status: 404, message: 'Not Updated' });
}
function deleteDoctor(req, res) {
    let userId = req.params.userId
    if (userId) {
        let del = doctors.filter(v => v.id == userId);
        doctors = doctors.filter(v => v.id != userId);
        fs.writeFile('./data/patient.json', JSON.stringify(doctors), (err) => console.log(err))
        res.status(200).json({ status: 200, message: 'OK', data: del });
    }
    else res.status(404).json({ status: 404, message: 'Not Updated' });
}

module.exports = { getDoctor, getDoctorById, addDoctor, updateAll_docDet, updateDoctor, deleteDoctor }
