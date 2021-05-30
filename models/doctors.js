const mongoose = require("mongoose")

const doctorsSchema =  new mongoose.Schema({
    Firstname:String,
    Email: String,
    MobileNumber: Number,
    Specialization: String 
});

const Doctor = mongoose.model('Doctor',doctorsSchema);

module.exports = Doctor;