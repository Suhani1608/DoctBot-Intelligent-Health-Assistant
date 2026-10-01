const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rollNumber: { type: String, required: true, unique: true },
  admissionNumber: { type: String, required: true },
  branch: { type: String, default: 'CSE' },
  semester: { type: String, default: '7' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);