var express = require('express');
const maincontroller = require('../controllers/main')
var router = express.Router();

/* GET home page. */
router.get('/', maincontroller.getMain);

module.exports = router;