const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

let doctor = require('./services/doc_ser')
let patient = require('./services/pat_ser')

app.get('/patient', patient.getPatient);
app.get('/patient/:userId', patient.getPatientById);

app.get('/doctor', doctor.getDoctor);
app.get('/doctor/:userId', doctor.getDoctorById);

app.post('/patient', patient.addPatient);
app.post('/doctor', doctor.addDoctor);

app.put('/patient/:userId', patient.updateAll_patDet);
app.put('/doctor/:userId', doctor.updateAll_docDet);


app.patch('/patient/:userId', patient.updatePatient);
app.patch('/doctor/:userId', doctor.updateDoctor);

app.delete('/patient/:userId', patient.deletePatient);
app.delete('/doctor/:userId', doctor.deleteDoctor);



app.listen(port, () => console.log(`Serving running on ${port} port`));