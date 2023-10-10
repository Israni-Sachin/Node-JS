// let doctors = require('../Data/doctor.json')
let fs = require('fs');
const db = require('../db/db.con')

async function getDoctor() {
    let query = `SELECT * from doctor`
    let result = await db.query(query);
    return result[0];
}

async function getDoctorById(userId) {
    let query = `SELECT * from doctor WHERE dt_id='${userId}'`
    let result = await db.query(query);
    console.log(result);
    return result[0];
}

async function addDoctor(body) {
    const fields = ['dt_name', 'dt_age', 'dt_gender'];
    const placeholders = '?,'.repeat(fields.length).replace(/,$/, '');
    const query = `INSERT INTO doctor
                (${fields.join()}) VALUES
                (${placeholders})`
    const result = await db.query(query, [body.dt_name, body.dt_age, body.dt_gender])
}

async function updateDoctor(userId, data) {
    const user = await getDoctorById(userId);
    const query = `UPDATE doctor 
                   SET dt_name = ?, dt_age = ?, dt_gender=? 
                   WHERE dt_id = ${userId} `
    const result = await db.query(query, [data.dt_name || user[0].dt_name, data.dt_age || user[0].dt_age, data.dt_gender || user[0].dt_gender])
    return result[0];
}

async function deleteDoctor(userId) {
    const query = `Delete from doctor where dt_id=${userId}`
    const result = await db.query(query)
    return result[0];
}

module.exports = { getDoctor, getDoctorById, addDoctor, updateDoctor, deleteDoctor };
