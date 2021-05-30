const User = require('../models/user');


module.exports.postUser = async (req, res) =>{
    console.log(req.body);
    if (req.body.action === 'register'){
        let user = new User({
            name:req.body.name,
            email:req.body.email,
            password: req.body.password
        });
         await user.save()
         res.redirect('main')
        
    }else{
        // fetch user with this mail from db 
        console.log(req.body)
        let userlog = User.findOne({email:req.body.email})
        if (!userlog) return res.status(400).send('invalid email or password');
        // compare pass
        if(userlog.password === req.body.password ){
            // login token set 
            res.redirect('main')
        }else{

            res.redirect('login-page')
        }
    }

};



