// routes/channels.js
const express = require("express");
const router = express.Router();

let users = []; // Array to store users
let channels = []; // Array to store channels

// Get all channels (for search)
router.get("/", (req, res) => {
  res.json(channels);
});

// Create a new channel
router.post("/:userId/create", (req, res) => {
  const { userId } = req.params;
  const { channelName } = req.body;

  const channel = {
    id: channels.length + 1,
    name: channelName,
    members: [userId],
  };

  channels.push(channel);
  res.status(201).json(channel);
});

// Join a channel
router.post("/:userId/join", (req, res) => {
  const { userId } = req.params;
  const { channelId } = req.body;

  const channel = channels.find((c) => c.id === channelId);
  if (!channel) {
    return res.status(404).json({ error: "Channel not found" });
  }

  if (!channel.members.includes(userId)) {
    channel.members.push(userId);
  }

  res.status(200).json(channel);
});

module.exports = router;