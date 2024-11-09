const express = require('express');
const router = express.Router();
const { admin, db } = require('../config/firebase');
const { verifyToken } = require('../middlewares/verify_token'); // Import the verifyToken middleware

// Route: Send Friend Request
router.post('/sendFriendRequest', verifyToken, async (req, res) => {
    const { senderId, receiverId } = req.body;
    try {
        const senderRef = db.collection('users').doc(senderId);
        const receiverRef = db.collection('users').doc(receiverId);

        // Add the receiver to sender's friend request list
        await senderRef.update({
            friendRequestsSent: admin.firestore.FieldValue.arrayUnion(receiverId)
        });

        // Add the sender to receiver's friend request received list
        await receiverRef.update({
            friendRequestsReceived: admin.firestore.FieldValue.arrayUnion(senderId)
        });

        res.status(200).json({ message: 'Friend request sent successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Route: Accept Friend Request
router.post('/acceptFriendRequest', verifyToken, async (req, res) => {
    const { receiverId, senderId } = req.body;
    try {
        await db.collection('users').doc(receiverId).update({
            friends: admin.firestore.FieldValue.arrayUnion(senderId),
            friendRequestsReceived: admin.firestore.FieldValue.arrayRemove(senderId)
        });
        await db.collection('users').doc(senderId).update({
            friends: admin.firestore.FieldValue.arrayUnion(receiverId),
            friendRequestsSent: admin.firestore.FieldValue.arrayRemove(receiverId)
        });
        res.status(200).json({ message: 'Friend request accepted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Route: Reject Friend Request
router.post('/rejectFriendRequest', verifyToken, async (req, res) => {
    const { receiverId, senderId } = req.body;
    try {
        await db.collection('users').doc(receiverId).update({
            friendRequestsReceived: admin.firestore.FieldValue.arrayRemove(senderId)
        });
        await db.collection('users').doc(senderId).update({
            friendRequestsSent: admin.firestore.FieldValue.arrayRemove(receiverId)
        });
        res.status(200).json({ message: 'Friend request rejected' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Route: Get Friend Requests Sent List
router.get('/getFriendRequestsSent', verifyToken, async (req, res) => {
    const { userId } = req.query;
    if (!userId) {
        return res.status(400).json({ error: 'userId is required' });
    }

    try {
        const userDoc = await db.collection('users').doc(userId).get();
        if (!userDoc.exists) {
            return res.status(404).json({ error: 'User not found' });
        }
        const friendRequestsSent = userDoc.data().friendRequestsSent || [];
        res.status(200).json({ friendRequestsSent });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Route: Get Friend Requests Received List
router.get('/getFriendRequestsReceived', verifyToken, async (req, res) => {
    const { userId } = req.query;
    if (!userId) {
        return res.status(400).json({ error: 'userId is required' });
    }

    try {
        const userDoc = await db.collection('users').doc(userId).get();
        if (!userDoc.exists) {
            return res.status(404).json({ error: 'User not found' });
        }
        const friendRequestsReceived = userDoc.data().friendRequestsReceived || [];
        res.status(200).json({ friendRequestsReceived });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Route: Get Friends List
router.get('/getFriendsList', async (req, res) => {
    const { userId } = req.query;
    if (!userId) {
        return res.status(400).json({ error: 'userId is required' });
    }

    try {
        const userDoc = await db.collection('users').doc(userId).get();
        if (!userDoc.exists) {
            return res.status(404).json({ error: 'User not found' });
        }
        const friends = userDoc.data().friends || [];
        res.status(200).json({ friends });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
