// index.js
const express = require('express');
const cors = require('cors');
const doubtsRouter = require('./doubts'); // Import the doubts route module
const channelsRouter = require('./channels'); // Import the channels route module
const friendsRouter = require('./routes/friends'); // Import the friends route module
const authRouter = require('./routes/auth'); 
// Import the auth route module
const userRouter = require('./routes/user'); // Import the user route module
const storeRouter = require('./routes/storage');
const app = express();
const PORT = 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Use the doubts router under the '/doubts' path
app.use('/doubts', doubtsRouter);
app.use('/channels', channelsRouter);
app.use('/friends', friendsRouter);
app.use('/auth', authRouter);
app.use('/user', userRouter);
app.use('/storage', storeRouter);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
