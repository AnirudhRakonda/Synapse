const express = require('express');
const { admin, db } = require('../config/firebase');
const { checkAuth } = require('../middlewares/verify_token');
const app = express();


// Route to create a new collection



app.post('/createCollection', checkAuth, async (req, res) => {
    const { collectionName, privacy, fields } = req.body;
  
    // Check if collection name is provided
    if (!collectionName || !fields || !Array.isArray(fields)) {
      return res.status(400).json({ message: 'Collection name and fields are required' });
    }
  
    // Check if the privacy setting is valid
    if (!['public', 'private'].includes(privacy)) {
      return res.status(400).json({ message: 'Privacy must be either "public" or "private"' });
    }
  
    try {
      const collectionRef = db.collection('user_collections').doc();
  
      // Create collection metadata
      const collectionData = {
        userId: req.user.uid,
        collectionName,
        privacy,
        fields,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
      };
  
      // Save the collection data to Firestore
      await collectionRef.set(collectionData);
  
      res.status(201).json({ message: 'Collection created successfully', collectionId: collectionRef.id });
    } catch (err) {
      console.error('Error creating collection:', err);
      res.status(500).json({ message: 'Error creating collection', error: err });
    }
  });
  
  // Route to get user's collections
  app.get('/myCollections', checkAuth, async (req, res) => {
    try {
      const snapshot = await db.collection('user_collections')
        .where('userId', '==', req.user.uid)
        .get();
  
      const collections = snapshot.docs.map(doc => {
        return { id: doc.id, ...doc.data() };
      });
  
      res.status(200).json(collections);
    } catch (err) {
      console.error('Error fetching collections:', err);
      res.status(500).json({ message: 'Error fetching collections', error: err });
    }
  });
  
  // Route to get public collections
  app.get('/publicCollections', async (req, res) => {
    try {
      const snapshot = await db.collection('user_collections')
        .where('privacy', '==', 'public')
        .get();
  
      const collections = snapshot.docs.map(doc => {
        return { id: doc.id, ...doc.data() };
      });
  
      res.status(200).json(collections);
    } catch (err) {
      console.error('Error fetching public collections:', err);
      res.status(500).json({ message: 'Error fetching public collections', error: err });
    }
  });