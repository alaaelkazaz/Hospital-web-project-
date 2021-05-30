var express = require('express');
const doctorsController = require('../controllers/doctors')
var router = express.Router();


/* GET home page. */
router.get('/', doctorsController.getDoctors);
router.post('/',doctorsController.postDoctor);
router.put('/:id',doctorsController.putDoctor);
router.get('/deleteDoctor',doctorsController.deleteDoctor);
router.get('/:id',doctorsController.getDoc);

module.exports = router;