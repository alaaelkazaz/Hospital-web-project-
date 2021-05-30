var express = require('express');
const nurseController = require('../controllers/nurse')
var router = express.Router();

/* GET home page. */
router.get('/', nurseController.getNurses);
router.post('/',nurseController.postNurse);
router.post('/:id',nurseController.putNurse);
router.get('/deleteNurse',nurseController.deleteNurse);
router.get('/:id',nurseController.getNurse);

module.exports = router;

