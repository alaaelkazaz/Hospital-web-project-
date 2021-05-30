const mongoose = require("mongoose")

const NursesSchema =  new mongoose.Schema({
    Firstname:String,
    Email: String,
    MobileNumber: Number,
    Specialization: String 
});

const Nurse = mongoose.model('Nurse',NursesSchema);

module.exports = Nurse;