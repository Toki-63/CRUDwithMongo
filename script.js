const express = require('express');
const app = express();
const mongoose = require('mongoose');
const registrationController = require('./Controllers/registrationController');
const allUserController = require('./Controllers/allUserController');
const deleteUserController = require('./Controllers/deleteUserController');
const editUserController = require('./Controllers/editUserController');

app.use(express.json());


//mongodb+srv://node:cqPOsn8jvTWAaQSP@cluster0.ikx8vhh.mongodb.net/?appName=Cluster0


mongoose.connect('mongodb+srv://node:cqPOsn8jvTWAaQSP@cluster0.ikx8vhh.mongodb.net/?appName=Cluster0').then(()=>{
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});


app.post('/registration',registrationController);
app.get('/users', allUserController);
app.delete('/deleteUser/:id',deleteUserController);
app.post('/editUser/:id', editUserController);


app.listen(9000, () => {
    console.log('Server is running on port 9000');
});