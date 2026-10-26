const userAddressModel = require('../models/userAddressModel');

const userAddressController = async (req, res) => {
    const { road, city, state, zip } = req.body;

    const newAddress = new userAddressModel({
        road: road,
        city: city,
        state: state,
        zip: zip,
        userId: req.body.userId
    });

    await newAddress.save();
    res.send('user address saved successfully');
}

module.exports = userAddressController;