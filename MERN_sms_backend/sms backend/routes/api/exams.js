const express = require('express');
const router = express.Router();

// Load Exam model
const Exam = require('../../models/Exam');

// @route GET api/exams/test
// @description tests exams route
// @access Public
router.get('/test', (req, res) => res.send('exam route testing!'));

// @route GET api/exams
// @description Get all exams
// @access Public
router.get('/', (req, res) => {
  Exam.find()
    .then(exams => res.json(exams))
    .catch(err => res.status(404).json({ noexamsfound: 'No Exams found' }));
});

// @route GET api/exams/:id
// @description Get single exam by id
// @access Public
router.get('/:id', (req, res) => {
  Exam.findById(req.params.id)
    .then(exam => res.json(exam))
    .catch(err => res.status(404).json({ noexamfound: 'No Exam found' }));
});

// @route GET api/exams
// @description add/save exam
// @access Public
router.post('/', (req, res) => {
  Exam.create(req.body)
    .then(exam => res.json({ msg: 'Exam added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this exam' }));
});

// @route GET api/exams/:id
// @description Update exam
// @access Public
router.put('/:id', (req, res) => {
  Exam.findByIdAndUpdate(req.params.id, req.body)
    .then(exam => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/exams/:id
// @description Delete exam by id
// @access Public
router.delete('/:id', (req, res) => {
  Exam.findByIdAndRemove(req.params.id, req.body)
    .then(exam => res.json({ mgs: 'Exam entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a exam' }));
});

module.exports = router;
