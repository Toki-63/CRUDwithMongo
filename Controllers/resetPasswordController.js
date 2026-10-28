const registrationModel = require('../models/registrationModel');
const bcrypt = require('bcryptjs');


const resetPasswordController = async (req, res) => {
    const { email, newPassword } = req.body;

    const finduser = await registrationModel.findOne({ email: email });


    if (!finduser) {
        res.send('User not found');
    }else {
        const hashedPassword = bcrypt.hashSync(newPassword, 10);
        finduser.password = hashedPassword;
        await finduser.save();
        res.send('Password reset successful');
    }


}
module.exports = resetPasswordController;