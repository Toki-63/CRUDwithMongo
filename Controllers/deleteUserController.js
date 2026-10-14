const RegistrationModel = require('../models/registrationModel');

let deleteUserController = (req, res) => {
    const { id } = req.params;

    RegistrationModel.findByIdAndDelete(id).then(()=>{
        res.send("User deleted successfully");
    }).catch((err) => {
        res.send("Error deleting user",err)
    })
}


module.exports = deleteUserController;