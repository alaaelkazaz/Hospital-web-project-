const mongoose = require("mongoose")

const mainSchema =  new mongoose.Schema({
   name: String,
   size: Number,
   ref:String
});

const MainPage = mongoose.model('Main',mainSchema);

module.exports = MainPage;