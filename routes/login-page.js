var express = require('express');
var router = express.Router();
const usercontroller = require('../controllers/user');
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login-page');
});
// save to the users db 
router.post('/',usercontroller.postUser);

module.exports = router;