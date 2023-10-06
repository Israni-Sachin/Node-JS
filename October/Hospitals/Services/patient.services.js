// let patients = require('../Data/patient.json')
let fs = require('fs');
const db = require('../db/db.con')


async function getPatient_logic() {
    let query = `SELECT * from patient`
    let result = await db.query(query);
    return result[0];
}

async function getPatientById_logic(userId) {
    let query = `SELECT * from patient WHERE pt_id='${userId}'`
    let result = await db.query(query);
    console.log(result);
    return result[0];
}
async function addPatient_logic(body) {
    console.log(body, 'last');
    const fields = ['pt_name', 'pt_age', 'pt_gender'];
    const placeholders = '?,'.repeat(fields.length).replace(/,$/, '');
    const query = `INSERT INTO patient
                (${fields.join()}) VALUES
                (${placeholders})`
    const result = await db.query(query, [body.pt_name, body.pt_age, body.pt_gender])
}
function updateAllPatientDetails_logic(userId, body) {

    let getIDindex = patients.indexOf(patients.find(v => v.id == userId));
    obj = { id: userId, ...body, id: userId }
    patients[getIDindex] = obj
    fs.writeFile('./data/patient.json', JSON.stringify(patients), (err) => console.log(err))

    return { status: 200, message: 'OK', data: obj };

}
function updatePatient_logic(userId, body) {

    let getIDindex = patients.indexOf(patients.find(val => val.id == userId))
    obj = { ...patients[getIDindex], ...body, id: userId }
    patients[getIDindex] = obj
    fs.writeFile('./data/patient.json', JSON.stringify(patients), (err) => console.log(err))

    return { status: 200, message: 'OK', data: obj };

}
async function deletePatient_logic(userId) {
    const query = `Delete from patient where pt_id=${userId}`
    const result = await db.query(query)
    return result[0];

    // let del = patients.filter(v => v.id == userId);
    // patients = patients.filter(v => v.id != userId);
    // fs.writeFile('./data/patient.json', JSON.stringify(patients), (err) => console.log(err))

    // return { status: 200, message: 'OK', Deleted_data: del };

}


module.exports = { getPatientById_logic, getPatient_logic, addPatient_logic, updatePatient_logic, deletePatient_logic, updateAllPatientDetails_logic }