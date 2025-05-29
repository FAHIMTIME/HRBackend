const express = require('express');
const router = express.Router();
const Leaves = require('../models/leaves');

// Get all leaves
router.get('/', async (req, res) => {
  try {
    const leaves = await Leaves.find({ isdeleted: false });
    res.json({ success: true, data: leaves, msg: "Data Received" });
  } catch (err) {
    res.status(500).json({ success: false, data: [], msg: "Error while reading leaves" });
  }
});

// Get single leave by ID
router.get('/:id', async (req, res) => {
  try {
    const leave = await Leaves.findById(req.params.id);
    if (!leave || leave.isdeleted) return res.status(404).json({ success: false, msg: "Leave Not Found" });
    res.json({ success: true, data: leave });
  } catch (err) {
    res.status(500).json({ success: false, data: [], msg: "Error while reading single leave" });
  }
});

// Add new leave
router.post('/', async (req, res) => {
  try {
    const newLeave = new Leaves(req.body);
    await newLeave.save();
    res.status(200).json({ success: true, msg: "New leave saved" });
  } catch (err) {
    res.status(500).json({ success: false, msg: "Error while adding new leave" });
  }
});

// Soft delete leave
router.delete('/:id', async (req, res) => {
  try {
    await Leaves.findByIdAndUpdate(req.params.id, { isdeleted: true });
    res.status(200).json({ success: true, msg: "Leave deleted" });
  } catch (err) {
    res.status(500).json({ success: false, msg: "Error while deleting leave" });
  }
});

// Update leave
router.put('/:id', async (req, res) => {
  try {
    await Leaves.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ success: true, msg: "Leave updated" });
  } catch (err) {
    res.status(500).json({ success: false, msg: "Error while updating leave" });
  }
});

module.exports = router;
