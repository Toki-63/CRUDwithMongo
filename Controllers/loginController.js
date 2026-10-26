const registrationModel = require('../models/registrationModel');
const bcrypt = require('bcryptjs');


const loginController = async (req, res) => {
    const { email, password } = req.body;
    const user = await registrationModel.findOne({ email: email });

    if (!user) {
        res.send('Not registered, please register first');
    }

    const passwordMatch = bcrypt.compareSync(password, user.password);

    if (!passwordMatch) {
        res.send('Incorrect password');
    } else {
        res.send('Login successful');
    }
}


module.exports = loginController;