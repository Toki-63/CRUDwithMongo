const usrerAddressModel = require('../models/userAddressModel');

const addressController = async (req, res) => {
    const { road, city, state, zip, userId } = req.body;

    const address = await usrerAddressModel.find().populate("userId");
    res.send(address);
}


module.exports = addressController;