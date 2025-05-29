const express = require('express');
const router = express.Router();
const Employee = require('../models/employee');

// Get all employees
router.get('/', async (req, res) => {
  try {
    const employees = await Employee.find({ isdeleted: false });
    res.json({ success: true, data: employees, msg: "Data Received" });
  } catch (err) {
    res.status(500).json({ success: false, data: [], msg: "Error while reading employees" });
  }
});

// Get single employee by ID
router.get('/:id', async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee || employee.isdeleted) return res.status(404).json({ success: false, msg: "Employee Not Found" });
    res.json({ success: true, data: employee });
  } catch (err) {
    res.status(500).json({ success: false, data: [], msg: "Error while reading single employee" });
  }
});

// Add new employee
router.post('/', async (req, res) => {
  try {
    const newEmp = new Employee(req.body);
    await newEmp.save();
    res.status(200).json({ success: true, msg: "New employee saved" });
  } catch (err) {
    res.status(500).json({ success: false, msg: "Error while adding new employee" });
  }
});

// Soft delete employee
router.delete('/:id', async (req, res) => {
  try {
    await Employee.findByIdAndUpdate(req.params.id, { isdeleted: true });
    res.status(200).json({ success: true, msg: "Employee deleted" });
  } catch (err) {
    res.status(500).json({ success: false, msg: "Error while deleting employee" });
  }
});

// Update employee
router.put('/:id', async (req, res) => {
  try {
    await Employee.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ success: true, msg: "Employee updated" });
  } catch (err) {
    res.status(500).json({ success: false, msg: "Error while updating employee" });
  }
});

module.exports = router;
