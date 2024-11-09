const express = require('express');
const router = express.Router();
const { admin, db } = require('../config/firebase');

const auth = admin.auth();

// Sign Up Route
router.post('/signup', async (req, res) => {
    const { email, password, name } = req.body;

    if (!email || !password) {
        return res.status(400).send({ message: 'Email and password are required' });
    }

    try {
        // Create the new user with email and password
        const userRecord = await auth.createUser({
            email,
            password,
        });

      // When a new user registers
        await db.collection('users').doc(userRecord.uid).set({
            name: name,
             email: email,
             profilePictureUrl: '',  // Add default or empty profile picture
                bio: '',
              friends: [],  // Initialize an empty friends list
              friendRequestsSent: [],  // Initialize an empty array for friend requests sent
             friendRequestsReceived: [],  // Initialize an empty array for friend requests received
     channels: [],
    status: 'active',
    lastSeen: admin.firestore.FieldValue.serverTimestamp(),
    achievements: [],
    notifications: [],
    createdAt: admin.firestore.FieldValue.serverTimestamp(), // Correct usage of serverTimestamp
});


        // Initialize additional collections related to the user
        await db.collection('friends').doc(userRecord.uid).set({
            friendshipId: userRecord.uid,  // Placeholder, friendshipId will be established during friend connections
            userId1: userRecord.uid,
            userId2: '',  // To be populated when a friend is added
            createdOn: admin.firestore.FieldValue.serverTimestamp(),
        });

        await db.collection('friendRequests').doc(userRecord.uid).set({
            requestId: userRecord.uid,  // Placeholder for incoming friend requests
            fromUserId: '',
            toUserId: userRecord.uid,
            status: 'pending',
            timestamp: admin.firestore.FieldValue.serverTimestamp(),
        });

        await db.collection('messages').doc(userRecord.uid).set({
            senderId: 'uniqueUserId',
            content: 'Hey! Let\'s connect!',
            timestamp: admin.firestore.FieldValue.serverTimestamp(),
            status: 'sent', // Values: sent, delivered, read
        });

        await db.collection('resources').doc(userRecord.uid).set({
            ownerId: 'uniqueUserId',
            title: 'JavaScript for Beginners',
            description: 'A comprehensive guide for JavaScript beginners.',
            tags: ['JavaScript', 'Programming'],
            fileUrl: 'https://example.com/resource.pdf',
            createdOn:  admin.firestore.FieldValue.serverTimestamp(),
        
        });

        await db.collection('quizBattles').doc(userRecord.uid).set({
            participants: ['uniqueUserId', 'friendUserId'],
      questions: ['question_1', 'question_2'],
      scores: { uniqueUserId: 10, friendUserId: 8 },
      status: 'in-progress', // Values: pending, in-progress, completed
      winnerId: 'uniqueUserId',
      timestamp:  admin.firestore.FieldValue.serverTimestamp(),
        });

        await db.collection('studySessions').doc(userRecord.uid).set({
            hostId: '',
            participants: [],
            startedAt: admin.firestore.FieldValue.serverTimestamp(),
            topic: '',
        });

        await db.collection('channels').doc(userRecord.uid).set({
            adminId: '',
      title: '',
      description: '',
      members: [],
            // Placeholder for channels
        });

     

        console.log("User created successfully!");

        // Return the response with user info (you can also return the user UID, etc.)
        res.status(201).send({
            message: 'User created successfully',
            uid: userRecord.uid,  // Send the GetStream token
            firebaseCustomToken: await auth.createCustomToken(userRecord.uid),  // Optional: Firebase custom token
        });
    } catch (error) {
        res.status(500).send({ message: 'Error creating user', error: error.message });
    }
});

// Sign In Route
router.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send({ message: 'Email and password are required' });
    }

    try {
        // Verify user credentials with Firebase Authentication
        const userRecord = await auth.getUserByEmail(email);

        // You can create a custom token for the user after verifying their email
        const customToken = await auth.createCustomToken(userRecord.uid);

        res.status(200).send({
            message: 'User signed in successfully',
            customToken, // Send the custom token to the frontend for future authentication
        });
    } catch (error) {
        res.status(401).send({ message: 'Invalid credentials', error: error.message });
    }
});


module.exports = router;