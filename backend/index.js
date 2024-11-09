// index.js
const express = require('express');
const cors = require('cors');
const doubtsRouter = require('./doubts'); // Import the doubts route module

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Use the doubts router under the '/doubts' path
app.use('/doubts', doubtsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
