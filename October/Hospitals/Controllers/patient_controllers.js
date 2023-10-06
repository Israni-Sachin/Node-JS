let patients_services = require('../Services/patient.services')

async function getPatient(req, res) {
    try {
        let data = await patients_services.getPatient_logic();
        res.send(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: 500, message: 'Error while getting student' });
    }
}

async function getPatientById(req, res) {
    // let includes = patients.some(v => v.id === userId)
    try {
        let userId = Number(req.params.userId)
        let data = await patients_services.getPatientById_logic(userId);
        res.send(data);
    }

    catch (error) {
        console.log(error);
        res.status(500).json({ status: 500, message: 'Error while getting student' });
    }
}

async function addPatient(req, res) {

    try {
        let body = req.body;
        let data = await patients_services.addPatient_logic(body);
        res.status(200).json({ message: "Patient added successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: 500, message: 'Error while adding student' });
    }


}

function updateAll_patDet(req, res) {
    let userId = Number(req.params.userId)
    let includes = patients.some(v => v.id === userId)

    if (includes) {
        body = req.body;
        let data = patients_services.updateAllPatientDetails_logic(userId, body);
        res.send(data);
    }

    else res.send({ status: 404, message: 'Not Updated' });
}

function updatePatient(req, res) {
    body = req.body;
    let userId = Number(req.params.userId)

    if (includes) {
        let includes = patients.some(v => v.id === userId)
        let data = patients_services.updatePatient_logic(userId, body);
        res.send(data);
    }

    else res.send({ status: 404, message: 'Not Updated' });
}
async function deletePatient(req, res) {
    try {
        let userId = req.params.userId;
        let result = await patients_services.deletePatient_logic(userId);
        res.status(200).json({ message: "Patient deleted successfully", data_affected: result.affectedRows });
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: 500, message: 'Error While Deleting' });
    }
}

module.exports = { getPatient, getPatientById, addPatient, updateAll_patDet, updatePatient, deletePatient }
