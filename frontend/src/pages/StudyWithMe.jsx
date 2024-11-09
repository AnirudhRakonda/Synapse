// StudyWithMe.jsx
import React from 'react';
import JitsiMeeting from '../components/JitsiMeeting';

function StudyWithMe() {
  // Optional handler when the API is ready
  const handleApiReady = (api) => {
    api.addEventListener('videoConferenceJoined', (event) => {
      console.log('Study session started:', event);
      api.executeCommand('toggleAudio'); // Example: Automatically mute on start
    });

    api.addEventListener('participantJoined', (event) => {
      console.log('Participant joined study session:', event);
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primary text-textColor p-4">
      <div className="w-full max-w-4xl bg-secondary rounded-lg shadow-lg p-6">
        <h2 className="text-3xl font-bold text-cta text-center mb-6">Join a "Study With Me" Session</h2>
        <div className="bg-primary rounded-lg p-4">
          <JitsiMeeting
            roomName="StudyWithMeRoom"  // Customize with a study-specific room name
            userName="User123"           // Replace with dynamic user name
            onApiReady={handleApiReady}
          />
        </div>
      </div>
    </div>
  );
}

export default StudyWithMe;
