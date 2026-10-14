const RegistrationModel = require('../models/registrationModel');

let editUserController = (req, res) => {
    const { id } = req.params;
    const { username, email, password } = req.body;

    RegistrationModel.findByIdAndUpdate(id, { username, email, password }).then(()=>{
        res.send("User updated successfully");
    }).catch((err) => {
        res.send("Error updating user", err);
    })
}

module.exports = editUserController;