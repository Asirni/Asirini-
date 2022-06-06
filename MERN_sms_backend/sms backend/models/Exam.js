const mongoose = require('mongoose');

const ExamSchema = new mongoose.Schema({
  studentName: {
    type: String,
    required: true
  },
  studentId: {
    type: String,
    required: true
  },
  code: {
    type: String,
    required: true
  },
  module_code: {
    type: Number,
    required: true
  },
  exam_date: {
    type: Date
  },
  updated_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Exam = mongoose.model('exam', ExamSchema);
