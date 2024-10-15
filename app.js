const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const router = require('./routes/userRoutes.js')

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/nodeRestfulApi')
.then(()=>{
    console.log("Database connected");
}).catch((error)=>{
    console.log(error);
})

app.listen(PORT, () => {
    console.log(`Server is Running on ${PORT}`);
});

app.use('/api/user', router);

