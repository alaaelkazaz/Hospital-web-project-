// This File intializes the tables of the db 
const Doctor = require('./models/doctors');
const  Nurse = require('./models/nurses');
const  MainPage  = require('./models/main');



async function createDoc(){
    const doctor = new Doctor({
        Firstname:"Zahraa",
        Email: "Zahraa@gmail.com",
        MobileNumber: 1258974661,
        Specialization:'Brain'
    });
    const respose = await doctor.save();
    //console.log(respose);
};


async function createNurse(){
    const nurse = new Nurse({
        Firstname:"Samaa",
        Email: "Samaa@gmail.com",
        MobileNumber: 1258974661,
        Specialization:'Emergancy Care'
    });
    const respose = await nurse.save();
    //console.log(respose);
};



async function createMainPage(){
    const maint= new MainPage({
        name: 'Nurses',
        size:320,
        ref:'Nurses'
    });
    await maint.save();
    const maint1= new MainPage({
        name: 'Pharmacists',
        size:20,
        ref:'Nurses'
    });
    await maint1.save();
    const maint2= new MainPage({
        name: 'Operations',
        size:520,
        ref:'Ops'
    });
     await maint2.save();
    const maint3= new MainPage({
        name: 'Accountants',
        size:7,
        ref:'Acc'
    });
     await maint3.save();
    const maint4= new MainPage({
        name: 'Birth Reports',
        size:720,
        ref:'BR'
    });
     await maint4.save();
    //console.log(respose);
};


function seed(){
    createDoc();
    createNurse();
    createMainPage();
    
};
module.exports = seed;