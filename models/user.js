const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type:String,
        minlength: 3,
        maxlength: 250,
    },
    email:{
        type: String,
        minlength:10,
        maxlength:250,
    },
    password:{
        type:String, 
        minlength: 8,
        maxlength:2500,
    }});

// use schema 
const User = mongoose.model('User',userSchema);
//exports 
module.exports = User;
