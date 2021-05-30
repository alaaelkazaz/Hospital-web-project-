const Nurse = require('../models/nurses');



module.exports.getNurses = async (req, res, next) => {
    allNurses = await Nurse.find();
    res.render('nurse', {
        nursesList: allNurses
    })};

module.exports.getNurse = async (req, res, next) => {
        nurse = await Nurse.findById(req.params.id);
        res.render('onenurse', {
            nurse: nurse
        })};
module.exports.postNurse = async (req, res, next) => {
    const nurse = Nurse({
        Firstname:req.body.name,
        Email: req.body.email,
        MobileNumber: req.body.phone,
        Specialization:req.body.spec
     })
     const obj = await nurse.save();
     //res.send(nurse._id)
     res.redirect('/nurse')
    };

module.exports.putNurse = async (req, res, next) => {
    let nurse = await Nurse.findById(req.body.id)
    nurse.overwrite({
        Firstname:req.body.name,
        Email: req.body.email,
        MobileNumber: req.body.phone,
        Specialization:req.body.spec
     });
     const obj = await nurse.save();
     //res.send(nurse._id)
     res.redirect('/nurse')
    /*
    const nurse = await Nurse.updateOne({_id:req.params.id},{Firstname: req.body.name},
        {Email: req.body.email},
        {MobileNumber: req.body.phone},
        {Specialization: req.body.spec})

    if (!nurse) return res.status(404);
    res.redirect('/nurse')
    */
    };
    
module.exports.deleteNurse = async (req, res, next) => {
    console.log(req.params.id)
        const nurse =await Nurse.findOneAndRemove(req.params.id)
        if (!nurse) return res.status(404).send('Not found to delete');
    res.redirect('/nurse')
    };