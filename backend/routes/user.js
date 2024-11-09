const router = require('express').Router();
const { admin, db } = require('../config/firebase');

router.get('/:userId', async (req, res) => {
    const userId = req.params.userId;
    try {
        const userRecord = await admin.auth().getUser(userId);
        const userData = await db.collection('users').doc(userId).get();
        if (!userData.exists) {
            return res.status(404).send('User not found');
        }
        res.status(200).send({ userData: userData.data() });
    } catch (error) {
        res.status(500).send(error.message);
    }
});


module.exports = router;