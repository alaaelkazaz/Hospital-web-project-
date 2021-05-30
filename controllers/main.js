const MainPage = require('../models/main'); 

module.exports.getMain = async (req, res, next) => {
    const allMain = await MainPage.find();
    res.render('main', {
        HospitalList: allMain
    })
};
  