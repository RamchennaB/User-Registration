const User = require('../models/userModel');

exports.addUserWithAddress = async (req, res) => {
  try {
    const { name, address } = req.body;
    
    // Create a new user with an address
    const newUser = new User({
      name,
      addresses: [{ address }]
    });

    await newUser.save();
    res.status(201).send('User and address added successfully');
  } catch (error) {
    res.status(500).send('Error occurred: ' + error.message);
  }
};
