// doubts.js
const express = require('express');
const router = express.Router();

// Dummy data array to store doubts
let doubts = [
  { id: 1, userId: 1, text: 'How to implement bubble sort?', solved: false, solution: null },
  { id: 2, userId: 2, text: 'What is the difference between let and var?', solved: false, solution: null }
];

// Route to fetch all doubts
router.get('/getDoubts', (req, res) => {
  res.json(doubts);
});

// Route to add a new doubt
router.post('/addDoubt', (req, res) => {
  const { userId, text } = req.body;
  const newDoubt = {
    id: doubts.length + 1,
    userId,
    text,
    solved: false,
    solution: null
  };
  doubts.push(newDoubt);
  res.status(201).json(newDoubt);
});

// Route to solve a doubt by adding a solution
router.post('/solveDoubt', (req, res) => {
  const { doubtId, solution, userName } = req.body;
  const doubt = doubts.find(d => d.id === doubtId);
  if (doubt) {
    doubt.solved = true;
    doubt.solution = { text: solution, solvedBy: userName };
    res.json({ message: 'Doubt solved successfully', doubt });
  } else {
    res.status(404).json({ message: 'Doubt not found' });
  }
});

module.exports = router;
