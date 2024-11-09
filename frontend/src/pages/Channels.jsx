import React from 'react';
import JitsiMeeting from '../components/JitsiMeeting';

function LiveChat() {
  // Optional handler when the API is ready
  const handleApiReady = (api) => {
    // Example: Automatically mute audio or add event listeners if desired
    api.addEventListener('videoConferenceJoined', (event) => {
      console.log('Conference started:', event);
      api.executeCommand('toggleAudio'); // Example: Automatically mute on start
    });

    api.addEventListener('participantJoined', (event) => {
      console.log('Participant joined:', event);
    });
  };

  return (
    <div>
      <h2>Welcome to Live Chat</h2>
      <JitsiMeeting
        roomName="LiveChatRoom"    // Customize with the specific room name
        userName="User123"         // Replace with dynamic user name
        onApiReady={handleApiReady}
      />
    </div>
  );
}

export default LiveChat;
