const express = require('express')
const mongo = require('mongoose')
require('dotenv').config();
const EmployeeRoute = require('./routes/employeeRoutes')
const LeaveRoute = require('./routes/leaveRoutes')

const app = new express();
app.use(express.json())

app.use('/employees', EmployeeRoute);
app.use('/leaves', LeaveRoute);

mongo.connect(process.env.MONGO_URI).then(()=>{
    console.log('Mongo DB Connected')
    app.listen(process.env.PORT,()=>{console.log("Started")})
})