const admin = require('firebase-admin');
const serviceAccount = require('../service-account.json'); // Path to your service account JSON file

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount), // Replace with your Firebase database URL
});

const db = admin.firestore();

module.exports = { admin, db };


