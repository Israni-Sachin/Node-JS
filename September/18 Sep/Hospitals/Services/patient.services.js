let patients = require('../Data/patient.json')
let fs = require('fs');


function getPatient_logic() {
    return { status: 200, message: 'OK', data: patients };
}
function getPatientById_logic(includes,userId) {
    if (includes) {
        return { status: 200, message: 'OK', data: patients.find(v => v.id == userId) };
    }
    else return { status: 404, message: 'Data Not Found' };
}
function addPatient_logic(body) {
    if (body) {
        obj = { id: patients[patients.length-1].id + 1, ...body }
        obj.id = patients[patients.length-1].id + 1
        patients.push(obj);
        fs.writeFile('./data/patient.json', JSON.stringify(patients), (err) => console.log(err))
        return { status: 200, message: 'OK', data: obj };
    }
    else return { status: 404, message: 'Not Updated' };
}
function updateAllPatientDetails_logic(includes,userId,body) {
    if (includes) {
        let getIDindex = patients.indexOf(patients.find(v => v.id == userId));
        obj = { id: userId, ...body, id: userId }
        patients[getIDindex] = obj
        fs.writeFile('./data/patient.json', JSON.stringify(patients), (err) => console.log(err))
        return { status: 200, message: 'OK', data: obj };
    }
    else return { status: 404, message: 'Not Updated' };
}
function updatePatient_logic(includes,userId,body) {
    if (includes) {
        let getIDindex = patients.indexOf(patients.find(val => val.id == userId))
        obj = { ...patients[getIDindex], ...body, id: userId }
        patients[getIDindex] = obj
        fs.writeFile('./data/patient.json', JSON.stringify(patients), (err) => console.log(err))
        return { status: 200, message: 'OK', data: obj };
    }
    else return { status: 404, message: 'Not Updated' };
}
function deletePatient_logic(includes,userId) {
    if (includes) {
        let del = patients.filter(v => v.id == userId);
        patients = patients.filter(v => v.id != userId);
        fs.writeFile('./data/patient.json', JSON.stringify(patients), (err) => console.log(err))
        return { status: 200, message: 'OK', Deleted_data: del };
    }
    else return { status: 404, message: 'Error While Deleting' };
}


module.exports = { getPatientById_logic, getPatient_logic, addPatient_logic, updatePatient_logic, deletePatient_logic, updateAllPatientDetails_logic }