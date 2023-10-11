const db = require('../../../../db/db.con');
const moment = require('moment');


async function getPrescription() {
    let query = `SELECT * from prescription`
    let result = await db.query(query);
    return result[0];
}

async function getPrescriptionById(userId) {
    let query = `SELECT * from prescription WHERE pres_id='${userId}'`
    let result = await db.query(query);
    console.log(result);
    return result[0];
}
async function addPrescription(body,req) {
    const fields = ['pres_pt_id', 'pres_medicine', 'pres_date', 'pres_created_at', 'pres_dt_id'];
    const placeholders = '?,'.repeat(fields.length).replace(/,$/, '');
    const query = `INSERT INTO prescription
                (${fields.join()}) VALUES
                (${placeholders})`
    const currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    const dt_id = req.user.us_id;;
    const result = await db.query(query, [body.pres_pt_id, body.pres_medicine, currentTime, currentTime, dt_id])
}

async function deletePrescription(userId) {
    const query = `Delete from prescription where pres_id=${userId}`
    const result = await db.query(query)
    return result[0];
}


module.exports = { getPrescription, getPrescriptionById, addPrescription, deletePrescription }
