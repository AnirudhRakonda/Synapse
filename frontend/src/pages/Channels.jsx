// Channels.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const userId = "user123"; // Static user ID for demo purposes

const Channels = () => {
  const [channels, setChannels] = useState([]);
  const [channelName, setChannelName] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchChannels();
  }, []);

  // Fetch all channels
  const fetchChannels = async () => {
    try {
      const res = await axios.get("/api/channels");
      setChannels(res.data);
    } catch (error) {
      console.error("Error fetching channels:", error);
    }
  };

  // Create a new channel
  const createChannel = async () => {
    try {
      const res = await axios.post(`/api/channels/${userId}/create`, {
        channelName,
      });
      setChannels([...channels, res.data]);
      setChannelName("");
    } catch (error) {
      console.error("Error creating channel:", error);
    }
  };

  // Join a channel
  const joinChannel = async (channelId) => {
    try {
      const res = await axios.post(`/api/channels/${userId}/join`, {
        channelId,
      });
      setChannels(
        channels.map((channel) =>
          channel.id === channelId ? res.data : channel
        )
      );
    } catch (error) {
      console.error("Error joining channel:", error);
    }
  };

  return (
    <div>
      <h1>Channels</h1>

      {/* Create channel */}
      <input
        type="text"
        value={channelName}
        placeholder="Channel Name"
        onChange={(e) => setChannelName(e.target.value)}
      />
      <button onClick={createChannel}>Create Channel</button>

      {/* Search channels */}
      <input
        type="text"
        value={search}
        placeholder="Search Channels"
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Display channels */}
      <ul>
        {/* {channels
          .filter((channel) =>
            channel.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((channel) => (
            <li key={channel.id}>
              <span>{channel.name}</span>
              <button onClick={() => joinChannel(channel.id)}>Join</button>
            </li>
          ))} */}
      </ul>
    </div>
  );
};

export default Channels;
