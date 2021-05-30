
/*
Contributors:
    1- Rania Ahmed Daoud
    2- Hanan Ahmed
    3- Manar Mohammed 
    4- Alaa Elkazaz

Todo:
1- Edit a doctor / Nurse   Done
2- Add a doctor / Nurse    Done 
3- Fix Doctor's page error Done  
4- Login and sign up  Done 
5- check the main page --> suspicous behaviour Done 
6- Extra Files delete and enhance routing 
7- Duplicate Nurse to Doctors 
*/


var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
var doctorssRouter = require('./routes/doctors');
var nurseRouter = require('./routes/nurse');
var loginRouter = require('./routes/login-page');
var mainRouter = require('./routes/main');
const seed = require('./seed');

var app = express();


mongoose.connect('mongodb://localhost/Hospital')
.then(()=>{ console.log('Connected successfully to the DB')})
.catch((err)=>{console.log(err)});



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/doctors', doctorssRouter);
app.use('/nurse', nurseRouter);
app.use('/main', mainRouter);
app.use('/login-page', loginRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

app.listen(3000, () => {
    console.log('Listening happily on port 3000')
})
// Itialize the db 
//seed();
module.exports = app;