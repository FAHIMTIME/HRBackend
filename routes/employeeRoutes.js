const express = require('express')
const router = express.Router();
const Employee = require('../models/employee')
const leaves = require('../models/leaves');

// ----------------------- EMPLOYEE ROUTES ----------------------- 

//Read all employee
router.get('/', async (req,res)=>{
    try{
        const employee = await Employee.find({isdeleted: false})
        const response = {success: true, data: employee, msg: "Data Received"}
        res.json(response)
    }
    catch(err){
        const response = {success: false, data: [],msg: "Error while reading"}
        res.status(500).json(response)
    }
})


//Read single employee
router.get('/:id', async (req,res)=>{
    try{
        const employee = await Employee.find(req.params.id)
        if(!employee || employee.isdeleted) return res.status(404).json({success: false, msg: "Employee Not Found"})
        res.json({sucess: true, data: employee})
    }
    catch(err){
        const response = {success: false, data: [],msg: "Error while reading single employee"}
        res.status(500).json(response)
    }
})

//Add new EMployee
router.post('/', async (req,res)=>{
    try{
        const newEmp = new Employee(req.body);
        const saveEmp = await newEmp.save();
         res.status(200).json({success: true,  msg: "new employee saved"})
    }
    catch(err){
        res.status(500).json({success: false,  msg: "Error while adding new employee"})
    }
})

router.delete('/:id', async(req, res)=>{
    try{
        const deleteEmp = await Employee.findOneAndUpdate(req.params.id, {isdeleted: true})
         res.status(200).json({success: true,  msg: "employee Deleted"})
    }
    catch(err){
        res.status(500).json({success: false,  msg: "Error while deleting employee"})
    }
})

router.put('/:id', async(req, res)=>{
    try{
        const deleteEmp = await Employee.findOneAndUpdate(req.params.id, req.body)
         res.status(200).json({success: true,  msg: "employee Deleted"})
    }
    catch(err){
        res.status(500).json({success: false,  msg: "Error while deleting employee"})
    }
})


// ----------------------- LEAVE ROUTES ----------------------- 

//Read all Leaves
router.get('/', async (req,res)=>{
    try{
        const leaves = await leaves.find({isdeleted: false})
        const response = {success: true, data: leaves, msg: "Data Received"}
        res.json(response)
    }
    catch(err){
        const response = {success: false, data: [],msg: "Error while reading"}
        res.status(500).json(response)
    }
})


//Read single Leave
router.get('/:id', async (req,res)=>{
    try{
        const Leave = await leaves.find(req.params.id)
        if(!leaves || leaves.isdeleted) return res.status(404).json({success: false, msg: "Leave Not Found"})
        res.json({sucess: true, data: leaves})
    }
    catch(err){
        const response = {success: false, data: [],msg: "Error while reading single Leave"}
        res.status(500).json(response)
    }
})

//Add new Leave
router.post('/', async (req,res)=>{
    try{
        const newLeave = new leaves(req.body);
        const saveLeave = await newLeave.save();
         res.status(200).json({success: true,  msg: "new Leave saved"})
    }
    catch(err){
        res.status(500).json({success: false,  msg: "Error while adding new Leave"})
    }
})

router.delete('/:id', async(req, res)=>{
    try{
        const delLeave = await leaves.findOneAndUpdate(req.params.id, {isdeleted: true})
         res.status(200).json({success: true,  msg: "Leave Deleted"})
    }
    catch(err){
        res.status(500).json({success: false,  msg: "Error while deleting Leave"})
    }
})

router.put('/:id', async(req, res)=>{
    try{
        const deleave = await Employee.findOneAndUpdate(req.params.id, req.body)
         res.status(200).json({success: true,  msg: "Leave Deleted"})
    }
    catch(err){
        res.status(500).json({success: false,  msg: "Error while deleting Leave"})
    }
})



module.exports = router
