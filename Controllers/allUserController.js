const registrationModel = require('../models/registrationModel');

const allUserController = async (req,res) => {
    let allusers = await registrationModel.find();
    res.send(allusers);
}

module.exports = allUserController;