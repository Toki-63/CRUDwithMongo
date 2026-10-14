const Registration = require('../models/registrationModel');


let registrationController = (req,res)=>{
    const { username, email, password } = req.body;
    const user = new Registration({
        username: username,
        email: email,
        password: password
    });
    user.save();
    res.send('User registered successfully');
}

module.exports = registrationController;