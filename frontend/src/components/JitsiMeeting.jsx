import React, { useEffect, useRef } from 'react';

const JitsiMeeting = ({ roomName, userName, onApiReady }) => {
  const jitsiContainerRef = useRef(null);

  useEffect(() => {
    // Check if JitsiMeetExternalAPI is available
    if (!window.JitsiMeetExternalAPI) {
      console.error('Jitsi Meet API script not loaded');
      return;
    }

    // Create a Jitsi Meet API instance
    const domain = 'meet.jit.si';
    const options = {
      roomName: roomName || 'DefaultRoom', // Room name, replace with dynamic if needed
      width: '100%',
      height: '100%',
      parentNode: jitsiContainerRef.current,
      userInfo: {
        displayName: userName || 'Guest',
      },
    };

    const api = new window.JitsiMeetExternalAPI(domain, options);

    // Trigger callback when API is ready (if needed)
    if (onApiReady) {
      onApiReady(api);
    }

    // Cleanup function to hang up and destroy the meeting on unmount
    return () => {
      api.dispose();
    };
  }, [roomName, userName, onApiReady]);

  return (
    <div
      ref={jitsiContainerRef}
      style={{ width: '800px', height: '600px' }}
    ></div>
  );
};

export default JitsiMeeting;
