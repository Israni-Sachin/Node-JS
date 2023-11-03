const { MongoMemoryServer } = require("mongodb-memory-server");
const mongoose = require("mongoose");

const connect = async () => {
    // const mongoServer= await MongoMemoryServer.create();
    // const mongoUri = mongoServer.getUri();
    // await mongoose.connect(mongoUri,{dbName:"testingDB"});
    // console.log(`MongoDB successfully connected to ${mongoUri}`);
    await mongoose.connect('mongodb://127.0.0.1:27017/test')
        .then(() => console.log("MongoDb connected"))
        .catch((err) => console.log(err));
}

module.exports = connect