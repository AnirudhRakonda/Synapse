const { auth } = require('../config/firebase'); // Import your Firebase auth module

// Middleware function to verify Firebase ID token
const verifyToken = async (req, res, next) => {
    const idToken = req.headers.authorization?.split('Bearer ')[1];

    if (!idToken) {
        return res.status(401).send({ message: 'Unauthorized' });
    }

    try {
        const decodedToken = await auth.verifyIdToken(idToken);
        req.user = decodedToken; // Attach the decoded user data to the request object
        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        return res.status(401).send({ message: 'Unauthorized', error: error.message });
    }
};

module.exports = { verifyToken }; // Export the function to use it in other files
