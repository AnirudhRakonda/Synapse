// App.jsx
import React from 'react';
import Navbar from './components/Navbar';

function App({ children }) {
  return (
    <div className="flex">
      <Navbar />
      <main className="ml-48 p-4 flex-1">
        {children}
      </main>
    </div>
  );
}

export default App;
