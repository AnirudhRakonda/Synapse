const router = require('express').Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { storage } = require('../firebase');
const { v4: uuidv4 } = require('uuid');
const bucket = require('../config/firebase2');

const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 5 * 1024 * 1024, // no larger than 5mb
    },
    });

router.post('/upload', upload.single('file'), async (req, res) => {
    try {
        const file = req.file;
        if (!file) {
            return res.status(400).send('Please upload a file.');
        }

        const uuid = uuidv4();
        const filePath = `files/${uuid}-${file.originalname}`;
        const blob = storage.bucket().file(filePath);

        const blobWriter = blob.createWriteStream({
            metadata: {
                contentType: file.mimetype,
            },
        });

        blobWriter.on('error', (err) => {
            console.error(err);
        });

        blobWriter.on('finish', async () => {
            const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${storage.bucket().name}/o/${encodeURI(filePath)}?alt=media`;
            res.status(200).send(publicUrl);
        });

        blobWriter.end(file.buffer);
    } catch (error) {
        console.error(error);
        return res.status(500).send('Error uploading file.');
    }
}
);

module.exports = router;
