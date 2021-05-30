const Doctor =  require('../models/doctors');
// Here we are going to fetch all doctors and display them 

module.exports.getDoctors= async (req, res, next) => {
    allDocs = await Doctor.find()
    //console.log(allDocs);
    res.render('doctors',{
        doctorsList:allDocs
    })
};
module.exports.getDoc = async (req, res, next) => {
    doc = await Doctor.findById(req.params.id);
    res.render('onenurse', {
        nurse: doc
    })};

module.exports.postDoctor= async (req, res, next) => {
    let doctor = new Doctor({
        Firstname:req.body.name,
        Email: req.body.email,
        MobileNumber: req.body.phone,
        Specialization:req.body.spec
    }
    );
    await doctor.save();
    res.redirect('/doctors')
};


module.exports.putDoctor= async (req, res) => {
    let doctor = await Doctor.findById(req.body.id)
    doctor.overwrite({
        Firstname:req.body.name,
        Email: req.body.email,
        MobileNumber: req.body.phone,
        Specialization:req.body.spec
     });
     const obj = await doctor.save();
     res.redirect('/doctors')
    
};

module.exports.deleteDoctor = async (req, res, next) => {
        const doc =await Doctor.findOneAndRemove(req.params.id)
        if (!doc) return res.status(404).send('Not found to delete');
    res.redirect('/doctors')
    };
