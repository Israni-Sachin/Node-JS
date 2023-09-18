let doctors = require('../Data/doctor.json')
let fs = require('fs');

function getDoctor_logic() {
    return { status: 200, message: 'OK', data: doctors }
}

function getDoctorById_logic(includes, userId) {
    if (includes) {
        return { status: 200, message: 'OK', data: doctors.find(v => v.id == userId) };
    }
    else return { status: 404, message: 'Data Not Found' };
}

function addDoctor_logic(body) {
    if (body) {
        obj = { id: doctors[doctors.length - 1].id + 1, ...body }
        obj.id = doctors[doctors.length - 1].id + 1
        doctors.push(obj);
        fs.writeFile('./data/patient.json', JSON.stringify(doctors), (err) => console.log(err))
        return { status: 200, message: 'OK', data: obj };
    }
    else return { status: 404, message: 'Not Updated' };
}

function updateAll_docDet_logic(includes, userId, body) {
    if (includes) {
        let getIDindex = doctors.indexOf(doctors.find(v => v.id == userId));
        obj = { id: userId, ...body, id: userId }
        doctors[getIDindex] = obj
        fs.writeFile('./data/patient.json', JSON.stringify(doctors), (err) => console.log(err))
        return { status: 200, message: 'OK', data: obj };
    }
    else return { status: 404, message: 'Not Updated' };
}

function updateDoctor_logic(includes, userId, body) {
    if (includes) {
        let getIDindex = doctors.indexOf(doctors.find(val => val.id == userId))
        obj = { ...doctors[getIDindex], ...body, id: userId }
        doctors[getIDindex] = obj
        fs.writeFile('./data/patient.json', JSON.stringify(doctors), (err) => console.log(err))
        return { status: 200, message: 'OK', data: obj };
    }
    else return { status: 404, message: 'Not Updated' };
}

function deleteDoctor_logic(includes, userId) {
    if (includes) {
        let del = doctors.filter(v => v.id == userId);
        doctors = doctors.filter(v => v.id != userId);
        fs.writeFile('./data/patient.json', JSON.stringify(doctors), (err) => console.log(err))
        return { status: 200, message: 'OK', data: del };
    }
    else return { status: 404, message: 'Error While Deleting' };
}

module.exports = { getDoctor_logic, getDoctorById_logic, addDoctor_logic, updateAll_docDet_logic, updateDoctor_logic, deleteDoctor_logic };
